const express = require('express');
let bodyParser = require('body-parser');
const path = require('path');
// const spawn = require('child_process');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('static'))

const manifestPath = path.join(__dirname, 'tonconnect-manifest.json');
const contractPath = path.join(__dirname, '/contract.js');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/creating', (req, res) => {
    res.render('user_page.ejs');
});

app.get('/tonconnect-manifest.json', (req, res) => {
    res.sendFile(manifestPath);
});

app.get('/contract.js', (req, res) => {
    res.sendFile(contractPath);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
