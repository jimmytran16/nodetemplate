const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('views',path.join(__dirname,"views")); //set the views directory
app.use(express.static('public')); //set the static folder to be under 'public'
app.set('view engine','ejs') //set the app to use the ejs view template engine

app.get('/',(request,response)=>{response.render(path.join(__dirname,"views","index"),{"page_type":"index"})});
app.get('/subpage',(request,response)=>{response.render(path.join(__dirname,"views","subpage"),{"page_type":"subpage"})});

app.listen(PORT, ()=>{console.log(`Connection to PORT ${ PORT }`)});
