const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const PORT = process.env.PORT || 3000;

var router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', router);

// const cors = require('cors');
// app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const { Blog } = require('./db/models');

app.get('/', (req, res) => {
  res.send("Hello World!");
})

/** Gets all blogs */
app.get('/blogs', (req, res) => {
  Blog.find().then((lists) => {
    res.send(lists);
  }).catch((e) => {
    res.send(e);
  })
})

/** Gets particular blogs */
app.post('/blogs', (req, res) => {
  var title = req.body.title;
  var author = req.body.author;
  var content = req.body.content;
  var listBlogs = [];
  Blog.find({
    title: {$regex: title, $options: "i"},
    author: {$regex: author, $options: "i"},
    content: {$regex: content, $options: "i"}
  }).then((blogs) => {
    for (each in blogs) {
      listBlogs.push(blogs[each]);
    }
    res.send(listBlogs);
  });
});

/** Creates new blog */
app.post('/create', (req, res) => {
  let newBlog = new Blog({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  });
  newBlog.save().then((blog) => {
    res.send(blog);
  })
});

/** Deletes blog by id */
app.delete('/blogs/:id', (req, res) => {
  Blog.findOneAndRemove({
    _id: req.params.id
  }).then((blog) =>{
    res.send(blog);
  })
});

/** Deletes all blogs */
app.delete('/blogs/', (req, res) => {
  Blog.deleteMany({
    
  }).then(() => {
    res.send("all deleted");
  }).catch(() => {
    res.send("something wrong with all delete");
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});