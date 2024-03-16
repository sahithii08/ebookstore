// const mongoose=require('mongoose');

// const bookschema=mongoose.Schema(
//     {
//         title:{
//             type:String,
//             required:true
//     },
//         author:{
//             type:String,
//             required:true
//         },
//         genre:{
//             type:String,
//       //email should be unique for every user
//             required:true
//         },
//         price:{
//             type:Number,
//             required:true
//         },
//         availability:{
//             type:Boolean,
//             required:true
//         },
//     },

        
        
//     );

// const book = mongoose.model('Book',bookschema);
// module.exports=book;

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
