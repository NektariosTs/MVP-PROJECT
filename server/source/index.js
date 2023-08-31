
const express = require("express");
 const cors = require ("cors")
const mongoose = require("mongoose")



const app = express()

app.use(express.json());
app.use(cors());


const moviesController = require("./controllers/movieController.js");
const usersController = require("./controllers/usersController.js");


//Routes

app.use("/auth" ,usersController )


app.get("/movies", moviesController.fetchMovies);
app.get("/movies/:id",moviesController.fetchMovie);
app.post("/movies",moviesController.createMovie);
app.put("/movies/:id",moviesController.updateMovie);
app.delete("/movies/:id",moviesController.deleteMovie );



mongoose.connect("mongodb+srv://nektariostsagkaris:12345@imdb.kjh7xol.mongodb.net/IMDB?retryWrites=true&w=majority")
    .catch((error) => console.log(error))
app.listen(5000, () => console.log("Server connected."))