const express = require('express');
const process = require('process');
const path = require('path');
const { start } = require('repl');

const app = express();

start : "node app.js"

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})


app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
 })

 app.get('/ingresar', (req, res) => {
     res.sendFile(path.resolve(__dirname,'./views/login.html'))
 })











app.listen(process.env.PORT || 3001, () => console.log('Servidor en marcha'));