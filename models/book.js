import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    year: Number,
});

const Book = mongoose.model('Book', bookSchema);