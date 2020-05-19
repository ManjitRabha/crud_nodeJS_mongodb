const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining scheema
const articleScheema = new Schema({
    title: {
        type: String,
        reqired: true,
    },
    author: {
        type: String,
        reqired: true,
    },
    body: {
        type: String,
        reqired: true,
    }
})

const Article = mongoose.model('topics', articleScheema);
// export
module.exports = Article;
