const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname+'/views/partials');
var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
  //res.render('maint.hbs');
  next();
});
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

app.get('/', (req, res) => {
  res.render('about.hbs',{
      pageTitle: 'New page',
      welcomeMessage: 'Welcome to this page',
      currentYear: new Date().getFullYear()
  })
});

app.listen(3000);
