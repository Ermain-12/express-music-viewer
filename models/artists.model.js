const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = Schema({
    name: String,
    genre: String
});

const albumSchema = Schema({
    title: String,
    author: String,
    releaseYear: String
});

export default mongoose.model(
    'albums', albumSchema
);


