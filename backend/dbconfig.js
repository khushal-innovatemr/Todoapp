const mongoose  =require('mongoose');
import dotenv from 'dotenv';

dotenv.config();

const db = mongoose.connect(process.env.MONGO_DB_URI,{
}).then(() => {
console.log('Connected to MongoDB');
}).catch(err => { 
console.error('Error connecting to MongoDB', err);
});

module.exports = db;