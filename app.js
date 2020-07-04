// Creating the server
const express = require('express');
const app = express()
const PORT = 3000;
const db = require('./db/connection')
const BodyParser = require('body-parser')

app.listen(PORT, function() {
    console.log('running on '+ PORT + ' port')
});

// body-parser
app.use(BodyParser.urlencoded({extended:false}))

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
    res.send('Running')
});


// jobs routes
app.use('/jobs', require('./routes/jobs.js'))