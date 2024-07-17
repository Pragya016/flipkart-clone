import React from 'react'
import styles from './css/categories.module.css';
import Catergory from './Category';
import {categories} from '../data/categories';

export default function CategoriesList() {
    return (
        <div id={styles.categories}>
            {categories.map(cat => (
                <Catergory key={cat.id} imageId={styles[cat.id]} desc={cat.name} categories={ cat.subcategories} />
            ))}
        </div>
    )
}
