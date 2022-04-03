import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        // required: true,
        trim: true
    }, title: {
        type: String,
        unique: true,
        // required: true,
        trim: true
    }, rating: {
        type: Number,
        // required: true,
        default: 0,
        trim: true
    }, price: {
        type: String,
        // required: true,
        trim: true
    }
    , finalPrice: {
        type: String,
        trim: true
    }
   
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)
export default Product