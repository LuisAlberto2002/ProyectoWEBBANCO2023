class testControllers{
    hola(req,res){
        console.log('hola');
        res.send(hola)
    }
}

module.exports=new testControllers();