const {Schema,model}=require('mongoose');

const userSchema=new Schema({
    name: {type:String},
    email: {type:String, require:true},
    password: {type: String},
    role: {type:String, default:"cliente"},
    RFC: {type:String}
})

module.exports=model('users',userSchema);