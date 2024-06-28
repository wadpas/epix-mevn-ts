const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'product name must be provider'],
	},
	price: {
		type: Number,
		required: [true, 'product price must be provider'],
	},
	featured: {
		type: Boolean,
		default: false,
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	company: {
		type: String,
		enum: {
			values: ['ikea', 'liddy', 'caressa', 'marcos'],
			message: '{VALUE} is not supported',
		},
	},
})

module.exports = mongoose.model('Product', ProductSchema)
