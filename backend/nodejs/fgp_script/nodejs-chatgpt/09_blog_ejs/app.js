const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// // Define routes here
// const posts = [
//     { id: 1, title: 'Post 1', content: 'This is the first blog post.' },
//     { id: 2, title: 'Post 2', content: 'This is the second blog post.' },
//     { id: 3, title: 'Post 3', content: 'This is the third blog post.' },
//   ];
const fs = require("fs");
const path = require("path");

// Define a function to read EJS files from the data folder
function readEJSFiles() {
  const dataPath = path.join(__dirname, "data");

  const files = fs.readdirSync(dataPath);

  const posts = files.map((file, index) => {
    const filePath = path.join(dataPath, file);
    const content = fs.readFileSync(filePath, "utf8");

    return {
      id: index + 1, // Assuming index starts from 0
      title: path.parse(file).name, // Use the file name as the title
      content, // Use the content of the EJS file as content
    };
  });

  return posts;
}

const posts = readEJSFiles();

// Define a route to render the home page
app.get("/", (req, res) => {
  res.render("home", { posts: posts });
});

// Define a route to render a single blog post
app.get("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.render("post", { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Define a route to render a single blog post
app.get('/:title', (req, res) => {
    const postTitle = req.params.title;
  
    // Find the post based on the title (slug)
    const post = posts.find(p => p.title === postTitle);
  
    if (post) {
      res.render('post', { post: post });
    } else {
      res.status(404).send('Post not found');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
