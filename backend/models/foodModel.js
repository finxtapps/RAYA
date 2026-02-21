import mongoose, { mongo } from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, reqyired:true},
    image: {type:String, required:true},
    category: {type:String, required:true}
})

const foodModel = mongoose.models.food || mongoose.model('foods', foodSchema);

export default foodModel;