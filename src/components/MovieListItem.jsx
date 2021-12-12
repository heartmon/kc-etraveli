import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import React from 'react';

const styles = {
  paper: {
    padding: 1,
    marginBottom: 0.5,
    borderRadius: 0.25,
    border: '1px solid #ddd',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ddd'
    }
  },
  selected: {
    backgroundColor: '#bbdefb'
  },
  episode: {
    color: '#0d47a1',
    fontWeight: 500
  }
};

const MovieTitle = styled('div')(({ theme }) => ({
  fontWeight: 500,
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const MovieListItem = (props) => {
  const { movie, onItemClick, selectedMovie } = props;

  const isSelected = selectedMovie?.title === movie.title;

  return <div onClick={() => onItemClick(isSelected ? null : movie)}>
    <Paper elevation={0} sx={Object.assign({}, styles.paper, isSelected ? styles.selected : {})}>
      <Grid container>
        <Grid item xs={12} md={3} sx={styles.episode}>
          EPISODE {movie.episode_id}
        </Grid>
        <Grid item xs={12} md={6}>
          <MovieTitle>{movie.title}</MovieTitle>
        </Grid>
        <Grid item xs={12} md={3}>
          {movie.release_date}
        </Grid>
      </Grid>
    </Paper>
  </div>
};

export default MovieListItem;