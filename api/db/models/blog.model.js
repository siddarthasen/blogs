const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  author: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  content: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = { Blog };