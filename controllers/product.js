const express = require('express');
const router = express.Router();



const productModel = require("../models/productList");

router.get("/list",(req,res)=>{
    res.render("product/productList", {
        title: "Product Listing page",
        products: productModel.getAllProducts()

    })

});


router.get("/add",(req,res)=>{
    res.render("product/productAdd", {
        title: "Product Add page",
       

    });

});

router.post("/add",(req,res)=>{
    res.render("product/productAdd", {
        title: "Product Add page",
       

    });

});





module.exports = router;