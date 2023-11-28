const express=require('express');
const path=require('path');

const port = process.env.PORT || 3000;
const app=express();
app.use('/assets',express.static(path.join(__dirname,'assets')));
app.use('',express.static(path.join(__dirname,'public')));

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/public/PaginaInicio.html');
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/error.html');
})

app.listen(port,()=>{
    console.log('Conexion establecida');
})