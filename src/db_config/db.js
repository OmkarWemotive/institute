//-------------Database Configuration----------------------------------

const mongoose= require('mongoose')
const { default: validator } = require('validator')
mongoose.connect('mongodb://localhost/TCA',{ useNewUrlParser:true, useUnifiedTopology:true })