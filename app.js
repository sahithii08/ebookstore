// // app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const Book=require('./module/bookmodule');
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB:', err));

// //Define Schemas
//  const bookschema = new mongoose.Schema({
//      title: String,
//      author: String,
//      genre: String,
//      price: Number,
//      availability: Boolean,
//      reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
//  });

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// const orderSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
//     totalAmount: Number,
//     status: String
// });

// const reviewSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
//     rating: Number,
//     comment: String
// });

// const book = mongoose.model('Book', bookschema);
// const User = mongoose.model('User', userSchema);
// const Order = mongoose.model('Order', orderSchema);
// const Review = mongoose.model('Review', reviewSchema);

// // Routes
// app.use('/books', require('./routes/books'));
// app.use('/users', require('./routes/users'));
// app.use('/orders', require('./routes/orders'));
// app.use('/reviews', require('./routes/reviews'));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Internal server error' });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {

//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const Book = require('./module/bookmodule');
const User = require('./module/usermodule');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/books', require('./routes/books'));
app.use('/users', require('./routes/users'));
// Add routes for other entities as needed

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

//first
app.post('/addbook', async (req, res) => {
    try{
        const book = await Book.create(req.body);
        res.status(201).json(book);
    }catch(err){
        console.log(err);   
        res.status(400).json({message: 'Internal server error'});
    }
});

//second
app.get('/getbooks', async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Internal server error'});
    }
});
//third
app.delete('/deletebook/:id', async (req, res) => {
    try{
        const book= await Book.findByIdAndDelete(req.params.id);
        if(!book){
            res.status(404).json({message:'Book not found ${id}'});
        }
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something went wrong'});
    }
});
//fourth
app.put('/updatebook/:id', async (req, res) => {
    try{
        const book = await Student.findByIdAndUpdate(req.params.id, req.body);
        if(!book){
            res.status(404).json({message:'Book not found ${id}'});
        } 
        const updatebook=await Book.findById(req.params.id);
        res.status(200).json(updatebook);
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something went wrong'});
    }
});


// Start the server
 const PORT = process.env.PORT || 4000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });
 mongoose.set("strictQuery", false);

// mongoose.set("strictQuery", false);

// mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//     console.log('connected to local MongoDB');
//     app.listen(3001, () => {
//         console.log('Server is running on port 3001');
//     });
//     }
//     )
//     .catch((error) => {
//     console.error('Error connecting to local MongoDB:', error);
// });



// Function to find an available port within a given range
// function findAvailablePort(startPort, endPort, callback) {
//     // Iterate through the ports in the range
//     for (let port = startPort; port <= endPort; port++) {
//         // Try to create a server on the current port
//         const server = http.createServer(app);
//         server.listen(port, () => {
//             // If the server is successfully created, close it and pass the port to the callback
//             server.close(() => {
//                 callback(port);
//             });
//         });
//         server.on('error', () => {
//             // If there's an error creating the server (i.e., the port is already in use), continue to the next port
//             // This will trigger the server's 'error' event, which we're ignoring here
//         });
//     }
// }

// // Usage example
// findAvailablePort(3000, 3002, (port) => {
//     console.log(`Available port: ${port}`);
// });
