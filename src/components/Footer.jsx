import React from 'react'
import styles from './css/footer.module.css';

export default function Footer() {
  return (
    <div id={styles.footer}>
      <div id={styles.icons}>
        
      </div>
      <p id={styles.text} style={{marginBottom:'10px'}}>PRIVACY POLICY | TERMS OF USE</p>
      <p id={styles.text}>@2007-2024 flipkart.com | ALL RIGHT RESERVED</p>
    </div>
  )
}
