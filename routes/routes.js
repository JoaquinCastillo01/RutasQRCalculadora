const express = require('express');
const path = require('path');

const router = express.Router();

//Ruta principal
router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
});

//Ruta QR
router.get("/QR",(req, res)=>{
    res.sendFile(path.join(__dirname,"../views/QR.html"));
});

//Ruta Calculadora
router.get("/Calculadora",(req, res)=>{
    res.sendFile(path.join(__dirname,"../views/Calculadora.html"));
});

module.exports=router;