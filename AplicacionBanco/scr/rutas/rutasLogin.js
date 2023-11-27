const router=require('express').Router();
const express=require('express');
const controllersLogin=require('./../controllers/controllersLogin');


router.post('/login', express.json(), controllersLogin.login);
router.post('/loginToken',express.json() ,controllersLogin.tokenCreate);

module.exports=router;