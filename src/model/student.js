const mongoose= require('mongoose')
const { default: validator } = require('validator')

const studentSchema = new mongoose.Schema({
    name:
    { 
        type:String,
        required:true
    },
    mobile:
    { 
        type:Number,
        required:true
         
    }
},
{
    timestamps:true
})

const Student= mongoose.model('Student',studentSchema)

module.exports=Student