const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    orderId:{type:String, required:true},
    paymentInfo:{type:String, default:''},
    products:{type:Object, required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    pincode:{type:String,required:true},
    phone:{type:String,required:true},
    name:{type:String,required:true},
    transactionid:{type:String,default:""},
    amount:{type:String,required:true},
    status:{type:String,default:'Initiated',required:true},
    deliveryStatus:{type:String,default:'unshipped',required:true}
},{timestamps:true})

export default mongoose.models.Order || mongoose.model("Order",OrderSchema)