const express = require('express');
const Artist = require('../models/artists.model');

const artistRouter = express.Router();

// artistRouter.get('/api/artists', (req, res) => {
//     res.json([
//         {
//             id: 1,
//             name: 'Trivium',
//             genre: 'Heavy Metal'
//         },
//         {
//             id: 2,
//             name: 'Whitechapel',
//             genre: 'Death Metal'
//         },
//         {
//             id: 3,
//             name: 'Amon Amarth',
//             genre: 'Heavy Metal'
//         }
//     ]);
// });


artist.Router('/', function(req, res, next){
    Artist.find(function(err, artists){
        if(err){
            console.log(err);
        }else{
            res.json(artists);
        }
    });
});

/// Get an artist by id
artist.Router('/:id', function(req, res, next){
    Artist.findById(req.params.id, function(err, artist){
        if(err){
            console.log(err);
        }else{
            res.json(artist);
        }
    });
});
