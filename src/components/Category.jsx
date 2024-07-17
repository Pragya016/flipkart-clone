import * as React from 'react';
import styles from './css/category.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';

export default function Category({ imageId, desc, categories, hasSubCategories }) {
  const navigate = useNavigate();

  function handleOpenCategory() {
    navigate('404');
  }

  return (
    <div id={styles.container}>
      <div className={styles.categoryBox}>
        <div id={imageId} className={styles.categoryIcon}></div>
        <div className={styles.desc}>
          <div id={styles.details}>
            <span className={styles.categoryText}>{desc}</span>
            <span>{hasSubCategories && <KeyboardArrowDownIcon style={{fontSize: '1rem', color: 'grey', position:'relative', top:'3px'}} />}</span>
            </div>
        </div>
      </div>
      <div id={styles.popoverContainer}>
      <div className={styles.popover} >
          {categories && categories.length > 0 && categories.map((cat, index) => (
            <Dropdown key={index} desc={cat.name} categories={cat.subcategories} onOpenCat={handleOpenCategory} onOpenSubCat={handleOpenCategory} />
          ))}
      </div>
      </div>
    </div>
  );
}