const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.get('/api/heroes', (req, res) => {
    req.app.get('db').get_heroes().then(heroes => {
        console.log("heroes", heroes)
        res.json(heroes)
    }).catch(err => {
        console.log('error', err);
        res.status(500).send("There was an error on the server");
    })
    
})






app.listen(3001, () => console.log("Server Started Yo!"))





