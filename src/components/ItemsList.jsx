import React from 'react'
import ItemCard from './ItemCard'
import styles from './css/item.list.module.css';

export default function ItemsList({ items, desc }) {
  return (
    <div id={styles.container}>
      <h3 id={styles.heading}>{ desc }</h3>
    <div id={styles.listContainer}>
          {items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}
