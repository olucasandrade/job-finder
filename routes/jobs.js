// Creating route for database

const express = require('express');
const router = express.Router();
const Job = require('../models/Job.js')

//job details
router.get('/view/:id', (req, res)=>
    Job.findOne({
        where: {id: req.params.id}
    }).then(job => {
        res.render('views.handlebars', {
            job
        })
    })
)


//test
router.get('/test', (req, res)=>{
    res.send('Running')
})

// send form route
router.get('/add', (req, res)=>{
    res.render('add.handlebars')
})


// adding job with post
router.post('/add', (req, res)=> {
    let {title, salary, company, description, email, new_job} = req.body;

    // inserting data in system
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(()=>res.redirect('/'))
    .catch(err => console.log(err));
})

module.exports = router