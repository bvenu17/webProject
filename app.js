const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const static = express.static(__dirname + '/public');
const news = require('./data/news');
const venues = require('./data/places');




const app = express();

app.use('/public', static);


app.use(express.json());
app.use(express.urlencoded({extenden:true}));

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/', async (req,res) => {
    const x = await news.getPersonByName();
    const img = await news.getImage();
    res.render('home',{ title:"Sports Connect", x:x,img:img});
})

app.get('/news', async (req,res) => {
  const articles = await news.getAllData();
  const x = await news.getPersonByName();
  const img = await news.getImage();
  res.render('newsPage',{ title:"Sports Connect", articles:articles,x:x,img:img});
})

app.get('/venues', async (req,res) => {
  const places = await venues.getPlaygrounds();
  res.render('places',{ title:"Sports Connect", places:places});
}) 

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});