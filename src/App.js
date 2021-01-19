import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';

import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import MainContent from './components/Container/MainContent/MainContent';
import Profile from './components/Container/Profile/Profile';
import Login from './components/Container/Login/Login';
import MovieDetails from './components/Container/MainContent/MovieDetails';

// let filmsName = '';

function App() {
  const [lastAdded, setLastAdded] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const [movieDetile, setMovieDetile] = useState([]);

  const [isAuthodized, setIsAuthorized] = useState(false);
  const [enteredUser, setEnteredUser] = useState('');

  // console.log(enteredUser)
  // const [searched, setSearched] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US&page=1")
      .then((res) => res.json())
      .then((result) => {
        setLastAdded(result);
      });

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US&page=1")
      .then((res) => res.json())
      .then((result) => {
        setTopRated(result);
      });


  }, []);


  return (
    <div className="App">
      <Header isAuthodized={isAuthodized} />
      <Switch>
        <Route path="/" exact component={() => <MainContent lastAdded={lastAdded} topRated={topRated} />} />
        <Route path="/films" component={() => <MainContent lastAdded={lastAdded} topRated={topRated} />} />
        <Route path="/animes" component={() => <MainContent lastAdded={lastAdded} topRated={topRated} />} />
        {
          isAuthodized ? <Route path="/profile" exact component={() => <Profile enteredUser={enteredUser} />} /> : <Route path="/login" exact component={() => <Login cb={(st, enteredUser) => {setIsAuthorized(st); setEnteredUser(enteredUser);}} />} />
        }
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
