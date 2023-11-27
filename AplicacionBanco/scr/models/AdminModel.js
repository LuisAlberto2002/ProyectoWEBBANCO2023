const {model,Schema}=require('mongoose');
const adminSchema=new Schema({
    nombre:{type:String,require:true},
    Correo:{type:String,require:true},
    password:{type:String,require:true}
})

module.exports=model('admintradores',adminSchema);