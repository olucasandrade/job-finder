// Creating the server
const express = require('express');
const app = express()
const PORT = 3000;
const db = require('./db/connection')

app.listen(PORT, function() {
    console.log('running on '+ PORT + ' port')
});

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
    res.send('Running 3s29')
});


