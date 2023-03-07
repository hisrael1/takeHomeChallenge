const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the posts route" }));

// index
// make sure asc by post date
router.get('', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => console.log(err));
})

// get by id
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => console.log(err));
})

// create a new post and return it
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        coffee: req.body.coffee,
        text: req.body.text,
        rating: req.body.rating
    })
    post.save()
        .then(post => res.json(post))
        .catch(err => console.log(err));
})

// delete post by id and return it
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(post => res.json(post))
        .catch(err => console.log(err));
})

module.exports = router;
