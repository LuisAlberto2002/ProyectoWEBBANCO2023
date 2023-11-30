const router=require('express').Router();
//const express=require('express');
const middleware=require('./../Middleware/middleware');
const clientControllers=require('./../controllers/controllersCliente');
//router.use('',express.json());
router.use('',middleware);

router.get('/movements.html',clientControllers.hola);

module.exports=router;