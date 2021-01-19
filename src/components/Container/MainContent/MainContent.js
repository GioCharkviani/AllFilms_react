import React from 'react';
import './MainContent.scss';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LastAddedItems } from './LastAddedItems';
import { TopRatedItems } from './TopRatedItems';
import { SearchedItems } from './SearchedItems';

class Searcher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searched: [],
            searchFims: ''
        }
    }

    render() { 

        const searchNewFilms = (e) => {
            let inputedName = e.target.value;
            // console.log(inputedName)
            if(inputedName.length > 2) {
                fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${inputedName}&language=en-US&api_key=b3f6943861498b97473f8ab6fbdd1764`)
                .then((res) => res.json())
                .then((result) => {
                    this.setState({
                        searched: result.results.slice(0, 5)
                    })
                });
            } else {
                this.setState({
                    searched: []
                });
            }
            // console.log(this.state.searched)
        }


        return (
            <div className="search-container">
                <div className="search-inner-container">
                    <input className="search-input"  value={this.state.value}  onChange={searchNewFilms} placeholder="Search a film.."></input>
                    <button className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="searched-items-container">
                    {
                        this.state.searched.length > 0 ? <SearchedItems searched={this.state.searched} /> : ''
                    }
                </div>
            </div>
        )
    }

}

const LastAddedMovies = (props) => {
    return (
        <div className="last-added-container">
            {
                props.lastAdded.results ? <LastAddedItems lastAdded={props.lastAdded} /> : ''
            }
        </div>
    )
}

const TopRatedMovies = (props) => {
    return (
        <div className="top-rated-container">
            {
                props.topRated.results ? <TopRatedItems topRated={props.topRated} /> : ''
            }
        </div>
    )
}

const MainContent = (props) => {
    // console.log(props);
    return (
        <div className="container">
            <Searcher />
            <LastAddedMovies lastAdded={props.lastAdded} />
            <TopRatedMovies topRated={props.topRated} />
        </div>
    )
}

export default MainContent;