const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Middleware working
app.use(function(req, res, next){
    console.log(Date.now());
    req.name = 'Kapil V';
    next();
});

// Index Route
app.get('/', (req, res) => {
    // console.log(req.name);
    // res.send('INDEX');
    const title = 'Welcome folks';
    res.render('index', {
        title: title
    });
});

// About Route
app.get('/about', (req, res) => {
    res.render('about');
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});