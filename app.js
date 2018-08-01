const express = require('express');
const hbs = require('hbs');
const app = express();
const artistRouter = require('./routes/artistRouter');

// Get the db URI
const dbURI = require('./config/keys').mongoURI;

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

// Register partial views
hbs.registerPartials('./views/partials');



app.use('/api/artists', artistRouter);
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Webpage'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        username: 'Ermain'
    });
});

app.get('api/artists', artistRouter);

// app.get('/api/albums', (req, res) => {
//     res.json([
//         {
//             id: 1,
//             title: 'Silence in the Snow',
//             author: 'Trivium',
//             releaseYear: '2015'
//         },
//         {
//             id: 2,
//             title: 'Jomsviking',
//             author: 'Amon Amarth',
//             releaseYear: '2016'
//         }
//     ]);
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
