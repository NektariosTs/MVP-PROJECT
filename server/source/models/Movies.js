const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: [{ type: String, required: true }],
    // instructions: { type: String, required: true },
    imageUrl: { type: String, required: true },
    movieTime: { type: Number, required: true },
    // userOwner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true
    // }
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;