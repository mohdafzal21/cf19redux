const express = require('express')
const router = express.Router()
const db = require('../models')

// Get - /movies
// all the moviesro from the collection 
// mongoose method - find 
router.get('/', (req,res)=>{
    db.MOVIESLIST.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

// Post - /movies
// insert a new movie
// mongoose method - create
router.post('/' , (req,res)=>{
    db.MOVIESLIST.create(req.body)
    .then(()=>res.redirect('/movies'))
    .catch((err)=> res.send(err))
})


// Get a single movie = 
// search by id - findOne 
router.get('/:id', (req,res)=>{
    db.MOVIESLIST.findOne({_id: req.params.id})
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})



module.exports = router