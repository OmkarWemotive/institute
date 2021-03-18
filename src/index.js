require("./db_config/db")
const path=require('path')
const hbs=require('hbs');
const express = require('express')
const app=express()
app.use(express.json())

const Student =require('./model/student')
const port = process.env.PORT || 5000

const publicDiretory =path.join(__dirname,'../public');
const viewPath =path.join(__dirname,'/template/views')
const partialPath =path.join(__dirname,'/template/partial')

app.use(express.static(publicDiretory))

app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)

app.get('/',(req,res)=>{

    res.render('login',{
        title:'Weather App',
        name:'omkar rokade'

    })
})

app.get('/profile',(req,res)=>{

    res.render('profile',{
        title:'Weather App',
        name:'omkar rokade'

    })
})


app.get('/home',(req,res)=>{

    res.render('home',{
        title:'Weather App',
        name:'omkar rokade'

    })
})

app.get('/teacher',(req,res)=>{
    res.render('teacher',{ 
        msg:'this was last page',
        title:'Weather App',
        name:'omkar rokade'})
})

app.get('/student',(req,res)=>{
    res.render('student',{
        title:'Weather App',
       name:'Omkar Rokade'
    })
})

app.get('/course',(req,res)=>{
    res.render('course',{
        title:'Weather App',
       name:'Omkar Rokade'
    })
})

app.get('/add_student',(req,res)=>{
    res.render('add_student',{
        title:'Weather App',
       name:'Omkar Rokade'
    })
})

app.get('/add_teacher',(req,res)=>{
    res.render('add_teacher',{
        title:'Weather App',
       name:'Omkar Rokade'
    })
})

app.get('/add_course',(req,res)=>{
    res.render('add_course',{
        title:'Weather App',
       name:'Omkar Rokade'
    })
})

app.post('/student',async(req,res)=>{
    
    
    const student = new Student(req.body)
    try
    {
        await student.save()
        res.status(201).send(student)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
 })


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})