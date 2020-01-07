import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const option = "See More"

export default function StylishCardMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
      console.log(event.currentTarget);
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

        <IconButton
            aria-label="more"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon />
            
        </IconButton>

        <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
        >
            <MenuItem 
                key={option} 
                selected={option === 'Pyxis'} 
                onClick={handleClose}
            >
            {option}
            </MenuItem>

        </Menu>

    </div>
  );
}