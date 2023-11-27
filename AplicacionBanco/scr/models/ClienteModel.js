const {model,Schema}=require('mongoose');
const clienteSchema=new Schema({
    nombre:{type:String},
    fechaNacimiento:{type:String},
    RFC:{type:String},
    saldo:{type:String,default:0.0},
    Servicios:{type:String,default:"Ninguno"},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

module.exports=model('clients',clienteSchema);