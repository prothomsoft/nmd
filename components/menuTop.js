import React from 'react';
import Button from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuTop = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
    <Button
        id="demo-customized-button"
        variant="menuButton"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        PORTFOLIO
      </Button>
      <MuiMenu id="basic-menu" PaperProps={{sx: {backgroundColor: 'transparent'}}}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                onMouseLeave: handleClose
            }}
        >
            <MuiMenuItem variant='menuButtons' onClick={handleClose}>PLENER ŚLUBNY</MuiMenuItem>
            <MuiMenuItem variant='menuButtons' onClick={handleClose}>REPORTAŹ ŚLUBNY</MuiMenuItem>
            <MuiMenuItem variant='menuButtons' onClick={handleClose}>SESJA PLENEROWA</MuiMenuItem>
      </MuiMenu>        
      </>
    );
};

export default MenuTop;