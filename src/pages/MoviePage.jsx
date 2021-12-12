import { Grid, Box } from '@mui/material';
import { isEmpty, sortBy } from 'lodash';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Filter from '../components/Filter';
import MovieInfo from '../components/MovieInfo';
import MovieList from '../components/MovieList';
import ServicesContext from '../services/ServicesContext';

const styles = {
  noSelectedContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    textAlign: 'center',
    width: '100%'
  },
  notFound: {
    marginTop: 2
  }
}

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortFieldName, setSortFieldName] = useState(null);
  const [searchString, setSearchString] = useState('');
  const services = useContext(ServicesContext);

  useEffect(() => {
    services?.movieService.getMovies().then((movies) => {
      setMovies(movies);
    });
  }, [services?.movieService]);

  const handleSelectMovie = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);

  const handleSort = useCallback((fieldName) => setSortFieldName(fieldName), []);

  const sortedFilteredMovies = useMemo(() => {
    const sortedMovies = sortFieldName ? sortBy(movies, sortFieldName) : movies;
    if (isEmpty(searchString)) {
      return sortedMovies;
    }
    return sortedMovies?.filter((movie) => movie.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
  }, [movies, sortFieldName, searchString])

  const isNotFound = searchString && sortedFilteredMovies.length === 0;

  return <div>
    {/* Navbar */}
    {/* Banner */}
    <Grid container>
      <Grid item xs={12} md={6}>
        <Filter
          onSortItemClick={handleSort}
          sortFieldName={sortFieldName}
          searchString={searchString}
          onSearchTextChange={(text) => setSearchString(text)}
        />
        {
          isNotFound ? <Box sx={styles.notFound}>Not found</Box>
          : <MovieList selectedMovie={selectedMovie} movies={sortedFilteredMovies} onSelectMovie={handleSelectMovie} />          
        }
      </Grid>
      <Grid item xs={12} md={6}>
        { selectedMovie ?
          <MovieInfo selectedMovie={selectedMovie} />
          : 
          <Box sx={styles.noSelectedContainer}>No movie selected</Box>
        }
      </Grid>
    </Grid>
    {/* Footer */}
  </div>
};

export default MoviePage;
