const express = require("express");
const router = express.Router();


router.get(("/ping"), (req, res) => res.json({'status': 'good'}));

// index
// make sure asc by name
router.get('', (req, res) => {
    Coffee.find()
        .then(coffees => res.json(coffees))
        .catch(err => console.log(err));
})

// get by id
router.get('/:id', (req, res) => {
    Coffee.findById(req.params.id)
        .then(coffee => res.json(coffee))
        .catch(err => console.log(err));
})

// create new coffee
router.post('/create', (req, res) => {
    const newCoffee = new Coffee({
        name: req.body.name,
        year: req.body.year,
        caffeineContent: req.body.caffeineContent,
        caffeinePercentage: req.body.caffeinePercentage
    });
    newCoffee.save()
        .then(coffee => res.json(coffee))
        .catch(err => console.log(err));
})

// delete coffee by id
router.delete('/delete/:id', (req, res) => {
    Coffee.findByIdAndDelete(req.params.id)
        .then(coffee => res.json(coffee))
        .catch(err => console.log(err));
})

module.exports = router;
