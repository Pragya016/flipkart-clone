import React from 'react'
import styles from './css/item.card.module.css';

export default function ItemCard({ item }) {
  const { imageUrl, name, price } = item;
  
  return (
    <div id={styles.box}>
      <img id={styles.image} src={imageUrl} alt={`${name} image`} />
      <h5 id={styles.category}>{name}</h5>
      <p id={styles.price}>Starting from { price }</p>
    </div>
  )
}
