require('mongoose');
const jws=require('jsonwebtoken');
const userModel=require('./../models/userModel');
const tokenModel=require('./../models/tokenModel');
const secret='LUIS';
class userControllers{
    login(req,res){

        const {email,password}=req.body;
        /*console.log("Email: ",email);
        console.log("Password: ",password);*/
        userModel.findOne({email, password}).then((response)=>{
            console.log(response);
            if(response){
                const token=jws.sign({
                    _id:response._id,
                    email:response.email,
                    role: response.role
                },secret);
                res.send({
                    token,
                    role: response.role
                });
            }else{
                res.sendStatus(400);
            }

        }).catch((err)=>{
            console.log('Error: ',err);
        });
    }

    tokenCreate(req,res){
        const {email}=req.body;
        const token=jws.sign({
            _id:email
        },secret);
        tokenModel
        tokenModel.create({email:email,token:token}).then((response)=>{
            res.send(response);
        }).catch((err)=>{
            res.send('Error: ', err);
        });
    }  
}
module.exports=new userControllers();