import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';



export const SearchedItems = (props) => {
    const history = useHistory();
    // console.log(props)
    return (
        <div className="inner-searched-items">
            {
                props.searched.map((movie, index) => (
                <div key={index} >
                    {
                        movie.poster_path ? <div className="movie-detile-container">
                            <img title={movie.title} className="img" id={movie.id} src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt="pic" />
                            <FontAwesomeIcon icon={faSearch} size="4x" className="movie-detile" onClick={() => {history.push(`movie/${movie.id}`)}} />
                        </div> : ''
                    }
                </div>
            ))
            }
        </div>
    )
}
