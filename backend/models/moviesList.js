const mongoose = require('mongoose')

const moviesListSchema = new mongoose.Schema({
 

    title : {
        type : String
    },
    poster: {
        type : String
    },
    banner : String,
    
    synopsis : String,
    
    year : String,
    
    
})

const MOVIESLIST = mongoose.model('MOVIESLIST' , moviesListSchema)

module.exports = MOVIESLIST