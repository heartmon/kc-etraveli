import { Box, TextField } from '@mui/material';
import React from 'react';
import SortBy from './SortBy';

const styles = {
  container: {
    marginBottom: 1,
    marginTop: 1
  }
}

const Filter = (props) => {
  const { onSortItemClick, sortFieldName, onSearchTextChange, searchString } = props;

  return <Box sx={styles.container}>
    <Box display="flex" alignItems="center">
      <SortBy onSortItemClick={onSortItemClick} sortFieldName={sortFieldName} />
      <TextField fullWidth size="small" value={searchString ?? ''} onChange={(event) => onSearchTextChange(event.target.value)} />
    </Box>
  </Box>
};

export default Filter;
