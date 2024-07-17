import * as React from 'react';
import Popover from '@mui/material/Popover';
import styles from './css/dropdown.module.css';

export default function Dropdown({ desc, categories, onClick}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <div
        // aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <p onClick={onclick}>{ desc}</p>
        <Popover
            id="mouse-over-popover"
            sx={{
            pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <ul id={styles.popover}>
            <li>hello</li>
            </ul>
        </Popover>
        </div>
    </div>
  );
}
