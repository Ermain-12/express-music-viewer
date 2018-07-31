const express = require('express');
const mongoose = require('mongoose');
const albumRouter = express.Router();

// Retrieve the album model 
const Album = require('../models/albums.model');


albumRouter.get('/', function(req, res, next){
    Album.find(function(err, albums){
        if(err){
            console.log(err);
            return next(err);
        }else{
            res.json(albums);
        }
    });
});

// Retrieve an album by ID
albumRouter.get('/:id', function(req, res, next){
    Album.findById(req.params.id, function(err, artist){
        if(err){
            console.log(err); 
            return res.next(artist);       
        }else{
            res.json(artist);                       
        }
    });
});

// Create a new album via POST request
albumRouter.post('/:id', function(req, res, next){
    Album.create(req.body, function(err, album){
        if(err){
            console.log(err);
            return next(err);
        }else{
            res.json(artist);
        }
    });
});

// Edit an ablum by id 
albumRouter.put('/:id', function(req, res, next){
    Album.findByIdAndUpdate(req.params.id, req.body, function(err, album){
        if(err){
            console.log(err);
            return next(err);
        }else{
            res.json(album);
        }
    });
});

// Delete an album by id from the data-base
albumRouter.delete('/:id', function(req, res, next){
    Album.findByIdAndRemove(req,params.id, req.body, function(err, album){
        if(err){
            console.log(err);
            return next(err);
        }else{
            res.json(album);
        }
    });
});

