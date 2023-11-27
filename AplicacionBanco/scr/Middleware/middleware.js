const authMiddleware=(req,res,next)=>{
    const token=req.query.token;

    if(token=='ok'){
        next();
    }else{
        res.status(401).send('No se completo el registro correctamente')
    }
};

module.exports=authMiddleware;