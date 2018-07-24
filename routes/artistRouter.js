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

artistRouter.route('/artists')
            .post(function(req, res){
                console.log('/artists');
                var artist = new Artist(req.body);

                artist.save();
                res.status(201).send(artist);
            })
            .get(function(req, res){
                console.log('GET /artists');
                
                Artist.find(function(err, artists){
                    if(err){
                        res.status(404).send(err);
                        return;
                    }

                    console.log(artists);
                });
            });


