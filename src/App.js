import React, { Component } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieForm from './components/MovieForm'

class App extends Component {
  state = {
    movies : [
      {name: "The Matrix", image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"},
      {name: "Air Bud", image: "https://m.media-amazon.com/images/M/MV5BMzQxODE4MzEyNF5BMl5BanBnXkFtZTgwNjk2OTY4ODE@._V1_.jpg"},
      {name: "Blade", image: "https://upload.wikimedia.org/wikipedia/en/1/19/Blade_movie.jpg"}
    ]
  }
  showMovies = () => this.state.movies.map(movie => {
    return <MovieCard {...movie}/>
  })

  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })

    // this is where the fetch would goes
  }

  render(){
    return (
      <div className="App">
        <h1>Movie App</h1>
        <MovieForm addMovie={this.addMovie}/>
        <ul>
        {this.showMovies()}
        </ul>
     </div>
    );
  }
}

export default App;
