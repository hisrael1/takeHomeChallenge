const express = require("express");
const mongoose = require("mongoose");
const Coffee = require("./models/Coffee");
const Post = require("./models/Post");
const app = express();
const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))
    
const coffee = require("./routes/api/coffee");
const post = require("./routes/api/post");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/coffee", coffee);
app.use("/api/post", post);
    
app.get("/", (req, res) => {
    res.send("Sammy the news man");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
