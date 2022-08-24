const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: { type: String },
    items: [{
        image: { type: String },
        imgUrl: { type: String },
    }]
})

module.exports = mongoose.model("Ad", schema)