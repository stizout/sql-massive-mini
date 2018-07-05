const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
}).catch(error => {
  console.log('-------------- error', error);
});

app.get('/api/heroes', (req, res) => {
  req.app.get('db').get_heroes().then(heroes => {
    res.json(heroes);
  }).catch(error => {
    console.log('error', error);
    res.status(500).send('There was an error on the server');
  })
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT + ' 🚀');
});
