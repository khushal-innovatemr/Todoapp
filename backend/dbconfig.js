const mongoose  =require('mongoose');

const db = mongoose.connect('mongodb+srv://admin:admin@cluster0.uduq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
}).then(() => {
console.log('Connected to MongoDB');
}).catch(err => { 
console.error('Error connecting to MongoDB', err);
});

module.exports = db;