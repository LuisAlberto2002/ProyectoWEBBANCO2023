
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//const path=require('path');
const cors=require('cors');

app.use(cors());
const port=process.env.PORT || 3000;
const rutaLogin=require('./scr/rutas/rutasLogin');
const rutas=require('./scr/rutas/rutas');
const mongoUrl='mongodb+srv://VulpesBlack:36944757Ara@vbdb.7dcjohk.mongodb.net/VBCompany?retryWrites=true&w=majority';
app.use('', rutaLogin);
app.use('',rutas);


mongoose.connect(mongoUrl).then(client=>{
    app.listen(port,()=>{
        console.log('VBDB ONLINE');
    })
}).catch(err=>{
    console.log('VBDB DISSABLE', err);
});
