import React from 'react'
import styles from './css/categories.module.css';
import Catergory from './Category';
import { categories } from '../data/categories';

export default function CategoriesList() {
    return (
        <div id={styles.categories}>
            {categories.map(cat => (
                <Catergory key={cat.id} imageId={styles[cat.id]} desc={cat.name} categories={ cat} />
            ))}
            {/* <Catergory
                imageId={styles.cat1}
                desc="Groceries"
            />
            <Catergory
                imageId={styles.cat2}
                desc="Mobile"
            />
            <Catergory
                imageId={styles.cat3}
                desc="Fashion"
            />
            <Catergory
                imageId={styles.cat4}
                desc="Electronics"
            />
            <Catergory
                imageId={styles.cat5}
                desc="Home & furniture"
            />
            <Catergory
                imageId={styles.cat6}
                desc="Appliances"
            />
            <Catergory
                imageId={styles.cat7}
                desc="Travel"
            />
            <Catergory
                imageId={styles.cat8}
                desc="Beauty, toys & more"
            />
            <Catergory
                imageId={styles.cat9}
                desc="Two Wheelers"
            /> */}
        </div>
    )
}
