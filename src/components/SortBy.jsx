import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const styles = {
  sortByButton: {
    marginRight: 1,
    whiteSpace: 'nowrap'
  },
  selectedDot: {
    width: 8,
    height: 8,
    backgroundColor: '#0d47a1',
    borderRadius: '50%',
    marginRight: 8
  }
}

const SortBy = (props) => {
  const { onSortItemClick, sortFieldName } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (sortBy) => {
    onSortItemClick(sortFieldName === sortBy ? null : sortBy);
    handleClose();
  };

  return <>
    <Button sx={styles.sortByButton} onClick={handleClick} variant="contained">
      Sort by
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={() => handleMenuItemClick('episode_id')}>
        {sortFieldName === 'episode_id' && <span style={styles.selectedDot}></span>} Episode
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('release_date')}>
        {sortFieldName === 'release_date' && <span style={styles.selectedDot}></span>} Year
      </MenuItem>
    </Menu>
  </>
};

export default SortBy;