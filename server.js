const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

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
  })
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs',{
      pageTitle: 'Projects',
  })
});

app.listen(port);
