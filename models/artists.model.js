const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = Schema({
    name: {type: String, require: true},
    genre: String
});

const albumSchema = Schema({
    title: {type: String, require: true},
    author: String,
    releaseYear: String
});

export default mongoose.model(
    'artists', artistsSchema
);


