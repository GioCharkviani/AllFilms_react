import React, { useState, useEffect } from "react";
const MovieDetails = (props) => {
    const MovieId = props.match.params.id;
    const [showMovieDetile, setShowMovieDetile] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US`)
        .then((res) => res.json())
        .then((result) => {
            setShowMovieDetile(result);
        });

    }, [MovieId]);
    console.log(showMovieDetile)
    if([].id) console.log('ok')
    return (
        <div>
            {
                showMovieDetile.id
                ? 
                <div className="display-movie-details">
                    <img src={"http://image.tmdb.org/t/p/w185" + showMovieDetile.poster_path}  alt="pic"/>
                    <div className="movie-infos">   
                        <h2>Title: {showMovieDetile.title}</h2>
                        <p>Gerne: {showMovieDetile.genres[0].name}</p>
                        <p>Release Date: {showMovieDetile.release_date}</p>
                        <p>Country: {showMovieDetile.production_countries[0].name}</p>
                        <p>Language: {showMovieDetile.spoken_languages[0].english_name}</p>
                        <p>Overview: {showMovieDetile.overview}</p>
                    </div>
                </div>
                : 
                <div></div>
            }
        </div>
    )
}

export default MovieDetails;