const {Schema,model}=require('mongoose');
const tokenSchema=new Schema({
    email:{type:String,require:true},
    token:{type:String,require:true}
})

module.exports=model('tokens',tokenSchema);