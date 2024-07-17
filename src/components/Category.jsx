import * as React from 'react';
import Popover from '@mui/material/Popover';
import styles from './css/category.module.css'
import Dropdown from './Dropdown';

export default function MouseOverPopover({ imageId, desc, categories}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { subcategories } = categories;
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <div
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseOver={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={styles.categoryBox}      
      >
        <div id={imageId} className={styles.categoryIcon}></div>
        <div className={styles.desc}>
            <div className={styles.categoryText}>{desc }</div>
        </div>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        style={{cursor:'pointer'}}
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
      <div id={styles.popover}>
          {subcategories.map((cat, index) => (
            <Dropdown key={index} desc={cat.name} categories={cat.subcategories} onClick={ (e) => console.log(e) } />
          ))}
      </div>
      </Popover>
    </div>
  );
}
