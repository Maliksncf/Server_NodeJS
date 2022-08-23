const express = require('express');
const app = express();
require('dotenv').config();// this line is mandatory when you want to read variables from the '.env' file 
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);


// const movies = [
//     {
//         id: 1,
//         title: 'The Shawshank Redemption',
//         year: 1994,
//         director: 'Frank Darabont',
//         rating: '9.3'
//     },
//     {
//         id: 2,
//         title: 'The Godfather',
//         year: 1972,
//         director: 'Francis Ford Coppola',
//         rating: '9.2'
//     },
//     {
//         id: 3,
//         title: 'The Godfather: Part II',
//         year: 1974,
//         director: 'Francis Ford Coppola',
//         rating: '9.0'
//     }
// ]



// app.get("/", (req, res)=> {
// res.status(200).json(movies);
// })

// app.get("/movies/:id", (req, res)=> {
//     const movie = movies.find(movie => movie.id === parseInt(req.params.id));
//     if (!movie) return res.status(404).json({msg: 'Movie not found'});
//     res.status(200).json(movie);
// })

// app.get("/movies/:id/:year", (req, res)=> {
//     console.log(req.params);
//     const movie = movies.find(movie => movie.id === parseInt(req.params.id) && movie.year === parseInt(req.params.year));
//     if (!movie) return res.status(404).json({msg: 'Movie not found'});
//     res.status(200).json(movie);
// })
// const Port = process.env.PORT || 5500;
// app.listen(Port, () => {
//     console.log(`Server started on port ${Port}`);
// })