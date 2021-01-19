import React from 'react';
import { faSearch, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';


const ShowMovie = (props) => {
    const history = useHistory();
    // console.log(props)
    const itemTitle = props.title.length < 20 ? props.title : (props.title.substring(0, 17) + '...');
    const releaseDate = props.release.substring(0, 4);
    return (
        <div className="top-rated-item">
            <h4 className="item-title">{itemTitle}</h4>
            <div className="movie-detile-container">
                <img title={itemTitle} className="img" id={props.id} src={"http://image.tmdb.org/t/p/w185" + props.imgPath} alt="pic" />
                <FontAwesomeIcon icon={faSearch} size="4x" className="movie-detile" onClick={() => {history.push(`movie/${props.id}`)}} />
            </div>
            <div>
                <span className="item-year" >Released: {releaseDate}</span>
            </div>
        </div>
    )
}

export class TopRatedItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topRatedArr: props.topRated.results,
            starter: 0
        }
    }

    render() {
        const decreaseStarter = () => {
            this.state.starter > 0 ? this.setState({
                starter: this.state.starter -1
            }) : console.log('first five items');
        }

        const increaseStarter = () => {
            this.state.starter < 15 ? this.setState({
                starter: this.state.starter +1
            }) : console.log('last five items');
        }

        let moviesList = [];


        for(let i = 0; i < this.state.topRatedArr.length; i++) {
            if(i >= this.state.starter && i <= this.state.starter+4) {
                moviesList.push(this.state.topRatedArr[i])
            }
        }

        const showTopRated = moviesList.map((movie, index) => (
            <ShowMovie key={index} id={movie.id} title={movie.title} imgPath={movie.poster_path} release={movie.release_date} />
        ));


        return <div>
                    <div className="top-rated">
                        <h2 className="top-rated-title" >Top Rated</h2>
                        <div>
                            <FontAwesomeIcon icon={faAngleLeft} size="2x" className="arrow-icon" onClick={decreaseStarter} />
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="arrow-icon" onClick={increaseStarter} />
                        </div>
                    </div>
                    <div className="top-rated-items">
                        { showTopRated }
                    </div>
                </div>
    }
}