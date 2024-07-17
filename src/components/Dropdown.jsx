import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './css/dropdown.module.css';

export default function Dropdown({ desc, categories }) {
  const [hover, setHover] = React.useState(false);

  return (
    <>
      <div id={styles.container}>
        <div
          id={styles.listItem}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span id={styles.text}>{desc}</span>
           <span>{hover && <ArrowForwardIosIcon style={{fontSize:'0.8rem', color:'grey'}} />}</span>
        </div>
      <div className={styles.popover} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}>
          {categories.length > 0 && categories.map((cat, index) => (
            <p className={styles.popover_text} key={index}>{cat }</p>
          ))}
      </div>
      </div>
      </>
  );
}