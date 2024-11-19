require('mongoose');
require('dotenv').config();
require('crypto-js');
const jws=require('jsonwebtoken');
const userModel=require('./../models/userModel');
const key = process.env.key;
//const tokenModel=require('./../models/tokenModel');
const secret=process.env.secret;
class userControllers{
    login(req,res){
        const email = CryptoJS.AES.decrypt(req.body.email,key);
        const password = CryptoJS.AES.decrypt(req.body.password,key);

        //const {email,password}=req.body;
        userModel.findOne({email, password}).then((response)=>{
            
            if(response){
                const token=jws.sign({
                    _id:response._id,
                    email:response.email,
                    role: response.role
                },secret);

                res.send({
                    token,
                    role: response.role,
                });
            }else{
                res.sendStatus(400);
            }

        }).catch((err)=>{
            console.log('Error: ',err);
        });
    }

    /*tokenCreate(req,res){
        const {email}=req.body;
        const token=jws.sign({
            _id:email
        },secret);
        
        tokenModel.create({email:email,token:token}).then((response)=>{
            res.send(response);
        }).catch((err)=>{
            res.send('Error: ', err);
        });
    }  */
}
module.exports=new userControllers();