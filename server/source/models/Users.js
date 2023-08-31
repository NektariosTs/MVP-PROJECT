const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        require: true
    }
    // savedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movies" }],
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;

