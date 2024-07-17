import React from 'react'
import styles from './css/errorpage.module.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div id={styles.container}>
      <div id={styles.imageContainer}></div>
      <p id={styles.message}>Unfortunately the page you are looking for has been moved or deleted</p>
      <Button variant='contained' color='primary' onClick={() => navigate('/')}>Go to Homepage</Button>
    </div>
  )
}
