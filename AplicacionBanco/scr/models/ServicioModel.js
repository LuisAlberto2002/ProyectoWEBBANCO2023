const {model,Schema}=require('mongoose');
const serviceSchema=new Schema({
    nombreEmpresa:{type:String,require:true},
    RFC:{type:String,require:true},
    saldo:{type:String,default:0.0},
    tipoServicio:{type:String,require:true},
    costo:{type:String,require:true},
    correo:{type:String,require:true},
    password:{type:String,require:true}
})

module.exports=model('servicies',serviceSchema);