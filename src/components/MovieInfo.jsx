import { AccessTime, MovieCreation, People } from '@mui/icons-material';
import { Box, Typography, Icon, Tooltip } from '@mui/material';
import React from 'react';
import AvatarInfo from './AvatarInfo';

const styles = {
  container: {
    padding: 4,
    paddingTop: 6
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: 1.25,
    marginBottom: 1
  },
  description: {
    color: '#323232'
  },
  subInfoContainer: {
    display: 'flex',
    textTransform: 'uppercase',
    color: '#666',
    marginBottom: 3
  },
  subInfo: {
    alignItems: 'center',
    display: 'flex',
    marginRight: 1
  },
  icon: {
    width: 20,
    height: 20
  },
  iconText: {
    marginLeft: 0.5,
    marginRight: 0.5
  }
}

const MovieInfo = (props) => {
  const { selectedMovie } = props;

  if (!selectedMovie) {
    return null;
  }

  return <Box textAlign="left" sx={styles.container}>
    <Typography sx={styles.title} variant="h5">
      {selectedMovie.title}
    </Typography>

    <Box sx={styles.subInfoContainer}>
      <Box sx={styles.subInfo}>
        <Tooltip title="Release date"><Icon><AccessTime /></Icon></Tooltip>
        <Typography sx={styles.iconText} variant="caption">  
          {selectedMovie.release_date}
        </Typography>
      </Box>
      <Box sx={styles.subInfo}>
        <Tooltip title="Director"><Icon alt="Director"><MovieCreation /></Icon></Tooltip>
        <Typography sx={styles.iconText} variant="caption">  
          {selectedMovie.director}
        </Typography>
      </Box>
      <Box sx={styles.subInfo}>
        <Tooltip title="Producer"><Icon><People /></Icon></Tooltip>
        <Typography sx={styles.iconText} variant="caption">  
          {selectedMovie.producer}
        </Typography>
      </Box>
    </Box>

    <Typography sx={styles.description} variant="body1">
      {selectedMovie.opening_crawl}
    </Typography>

    <Box>
      <AvatarInfo title="Species" items={selectedMovie.species} />
    </Box>

    <Box>
      <AvatarInfo title="Planets" items={selectedMovie.planets} />
    </Box>
  </Box>
};

export default MovieInfo;