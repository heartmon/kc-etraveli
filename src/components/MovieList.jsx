import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  const { movies, onSelectMovie, selectedMovie } = props;
  return <div>
    {
      movies.map((movie, index) => <MovieListItem selectedMovie={selectedMovie} key={index} movie={movie} onItemClick={onSelectMovie} />)
    }
  </div>
};

export default MovieList;