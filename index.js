const express = require('express');
const compression = require('compression')
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const destPath = __dirname + '/public';

const app = express();

const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log('--------------------------');
    console.log(`Listening on port: ${port}`);
    console.log('--------------------------');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(sassMiddleware({
    src: path.join(__dirname, 'src'),
    dest: path.join(destPath),
    debug: true,
    outputStyle: 'compressed'
}));

app.use(express.static( path.join( __dirname, 'public' ) ) );

app.use(compression());

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        loggedIn: false
    });
});

app.get('/loggedin', (req, res) => {
    res.render('index', { loggedIn: true });
});
