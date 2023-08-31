const MovieModel = require("../models/Movies");

const fetchMovies = async (req, res) => {
    const movies = await MovieModel.find();
    res.json({ movies: movies });
};

const fetchMovie = async (req, res) => {
    const movieId = req.params.id;
    const movie = await MovieModel.findById(movieId);
    res.json({ movie: movie });
};

const createMovie = async (req, res) => {
    const { name, description, imageUrl, movieTime } = req.body;

    const movie = await MovieModel.create({
        name,
        description,
        imageUrl,
        movieTime,
    });

    res.json({ movie: movie })
};

const updateMovie = async (req, res) => {
    const movieId = req.params.id;
    const { name, description, imageUrl, movieTime } = req.body;
    await MovieModel.findByIdAndUpdate(movieId, {
        name,
        description,
        imageUrl,
        movieTime,
    });
    const movie = await MovieModel.findById(movieId);

    res.json({ movie: movie });
};

const deleteMovie = async (req, res) => {
    const movieId = req.params.id;
    await MovieModel.findOneAndDelete({ _id: movieId })
    res.json({ message: "movie deleted" });
};

module.exports = {
    fetchMovies,
    fetchMovie,
    createMovie,
    updateMovie,
    deleteMovie,
};