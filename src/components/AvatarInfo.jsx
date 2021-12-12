import React from 'react';
import { Avatar, AvatarGroup, Box } from '@mui/material';

const styles = {
  container: {
    borderTop: '1px solid #ddd',
    marginTop: 2,
    paddingTop: 2,
    paddingBottom: 2,
    width: '100%'
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontSize: 13,
    fontWeight: 600,
    color: '#888',
    marginBottom: 1
  },
  avatars: {
    display: 'flex'
  },
  avatar: {
    marginRight: 0.25,
  }
}

const AvatarInfo = (props) => {
  const { items, title } = props;
  return <Box sx={styles.container}>
    <Box>
      <Box sx={styles.title}>{title}</Box>
      <Box sx={styles.avatars}>
        <AvatarGroup max={10}>
        {
          items.map((specie) => <Avatar sx={styles.avatar}>{specie}</Avatar>)
        }
        </AvatarGroup>
      </Box>
    </Box>
  </Box>
};

export default AvatarInfo;