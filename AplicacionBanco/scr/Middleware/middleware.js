const jws=require('jsonwebtoken');
require('dotenv').config();
const secret=process.env.secret;
const authMiddleware=(req,res,next)=>{
    const token=req.query.params.token;
    jws.verify(token,secret,(err,decode)=>{
        if(err){
            res.status(401).send({msg:'No estas logueado'});
        }else{
            next();
            res.send(decode);
        }
    })
};

module.exports=authMiddleware;