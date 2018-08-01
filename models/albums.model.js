const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = Schema({
    title: {
        type: string,
        require: true
    },
    author: {
        type: string
    },
    year: {
        type: Date.year,
        default: Date.now
    }
});

module.exports = Album = mongoose.Schema('albums', albumSchema);
