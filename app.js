// Creating the server
const express = require('express');
const handlebars = require('express-handlebars')
const app = express()
const db = require('./db/connection')
const BodyParser = require('body-parser')
const path = require('path')

const PORT = 3000;


app.listen(PORT, function() {
    console.log('running on '+ PORT + ' port')
});

// body-parser
app.use(BodyParser.urlencoded({extended:false}))

// handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// db connection
db
    .authenticate()
    .then(()=>{
        console.log('Database connected')
    })
    .catch(err => {
        console.log('UNKOWN ERROR: '+err )
    });


// route
app.get('/', (req, res)=>{
    res.render('layouts/index.handlebars')
});


// jobs routes
app.use('/jobs', require('./routes/jobs.js'))