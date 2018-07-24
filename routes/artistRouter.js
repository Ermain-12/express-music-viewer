const express = require('express');
const artistRouter = express.Router();

artistRouter.get('/api/artists', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Trivium',
            genre: 'Heavy Metal'
        },
        {
            id: 2,
            name: 'Whitechapel',
            genre: 'Death Metal'
        },
        {
            id: 3,
            name: 'Amon Amarth',
            genre: 'Heavy Metal'
        }
    ]);
});


