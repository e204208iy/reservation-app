const mongoose = require('mongoose')

const Schema =mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    coverImage: String,
    name: { type: String, required: true, max:[60,'最大60文字までです'] },
    price: Number,
    description: String,
    Heading1: String,
    Heading2: String,
    Heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,

});

module.exports = mongoose.model('Product', ProductSchema)