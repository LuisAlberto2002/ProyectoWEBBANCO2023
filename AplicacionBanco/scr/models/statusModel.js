const {Schema,model}=require('mongoose');
const StatusSchema=new Schema({
    RFC:{type:String,require:true},
    status:{type:String,require:true}
})

module.exports=model('Status',StatusSchema);