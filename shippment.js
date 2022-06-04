import mongoose from 'mongoose';
const postSchema=mongoose.Schema({
    shippment_status:String,
    order_id:Number,
    address:String,
    order_status:String
});
const shippment= mongoose.model('shippment',postSchema);
export default shippment;