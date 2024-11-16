const jws=require('jsonwebtoken');
require('dotenv').config();

const secret=process.env.secret;
const authMiddleware=(req,res,next)=>{
    const value = document.cookie;
    const parts = value.split(";");
    const key = parts[0];
    const keyParts = key.split("=");
    const token = keyParts[1];
    jws.verify(token,secret,(err,decode) => {
        if(err){
            res.status(401).send({msg:'No estas logueado'});
            window.open("/inicio_sesion");
        }else{
            next();
            res.send(decode);
        }
    }) 
    /*const token=req.query.params.token;
    jws.verify(token,secret,(err,decode)=>{
        if(err){
            res.status(401).send({msg:'No estas logueado'});
        }else{
            next();
            res.send(decode);
        }
    })*/
};

module.exports=authMiddleware;