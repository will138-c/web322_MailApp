const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config({path:"./config/keys.env"});


const app = express()
const port = 8080

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));


app.set('view engine', '.hbs');

//set up body parsser

app.use(bodyParser.urlencoded({ extended:false}));


//Load controllers

const generalController = require("./controllers/general");
const productController = require("./controllers/product");


app.use("/", generalController);
app.use("/product", productController);





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))