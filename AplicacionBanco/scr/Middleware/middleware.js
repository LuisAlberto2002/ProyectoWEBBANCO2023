const jws=require('jsonwebtoken');
require('dotenv').config();
const secret=process.env.secret;
const authMiddleware=(req,res,next)=>{
    const token=localStorage.getItem('token');
    jws.verify(token,secret,(err,decode)=>{
        if(err){
            res.status(401).send({msg:'No estas logueado'});
        }else{
            next();
            req.user=decode;
        }
    })
};

module.exports=authMiddleware;