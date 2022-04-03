import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true
    }, title: {
        type: String,
        required: true,
        trim: true
    }, rating: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    }, price: {
        type: Number,
        required: true,
        trim: true
    }, finalPrice: {
        type: Number,
        trim: true
    }
   
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)
export default Product