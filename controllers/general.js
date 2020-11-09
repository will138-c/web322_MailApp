const express = require('express');
const router = express.Router();



//routes

router.get('/', (req, res)=>{
    res.render("general/home",{
        title:"Home Page"
    });
});

router.get('/contact-us', (req, res)=>{
    res.render("general/contactUs",{
        title:"Contact Us page",
        values:{
            message: 'Your message goes here.'
        }
    });
});


router.post('/contact-us',(req, res)=>{
   // console.log(req.body);
   console.log(req.body);
   let validation = {};
   let passed = true;

    const { firstName, lastName, email,message }= req.body;
    //req.body.firstName
    // if (typeof firstName !=== 'sting' || firstName.length ===0)
    if(!firstName){
        validation.firstName = "You must specify a first name.";
        passed = false;}
    else if(firstName.length <2) {
        validation.firstName = "First name must be at least 2 charactoers. ";
        passed = false;

    }

    
    if(passed){
        const sgMail = require("@sendgrid/mail");

        sgMail.setApiKey(process.env.SEN_GRID_API_KEY);

        const msg = {
            to: 'wangzhan1308@gmail.com',
            from: 'zwang241@myseneca.ca',
            subject: 'Contact Us form submission',
            html:          
                `Vistor's Full Name: ${firstName} ${lastName}<br>
                Vistor's Email Address: ${email}<br>
                Vistor's message: ${message}<br>
                `
        };

        sgMail.send(msg)
            .then(()=>{
                console.log('send mail success');
                res.redirect("/");
            })
            .catch(err=>{
                console.log(`Erro ${err}`);
                res.render("general/contactUs", {
                    title: "/contact Us Page",
                    validation: validation,
                    values:req.body
                });
            });

        //res.redirect("/");
    } else{
        res.render("general/contactUs",{
        title:"Contact Us page",
        validation: validation,
        values: req.body
    });
    }
});


module.exports = router;