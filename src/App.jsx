import React, { useMemo } from 'react';
import './App.css';
import ServicesContext from './services/ServicesContext';
import MovieService from './services/MovieService';
import { AppBar, Container, Typography } from '@mui/material';
import MoviePage from './pages/MoviePage';

const styles = {
  container: {
    paddingTop: 2
  }
}

function App() {
  const services = useMemo(() => {
    return {
      movieService: new MovieService()
    }
  }, []);

  return (
    <ServicesContext.Provider value={services}>
      <div className="App">
        <AppBar position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Star Wars
          </Typography>
        </AppBar>
        <Container sx={styles.container} maxWidth="xl">
          <MoviePage />
        </Container>
      </div>
    </ServicesContext.Provider>
  );
}

export default App;
