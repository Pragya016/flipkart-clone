import React from 'react'
import CategoriesList from './CategoriesList'
import Carousel from './Carousel'
import Electronics from './Electronics';
import BeautyAndToys from './BeautyAndToys';
import SportAndHealthcare from './SportAndHealthcare';
import Footer from './Footer';

export default function Outlet() {
  return (
    <>
      <CategoriesList />
      <Carousel />
      <Electronics />
      <BeautyAndToys />
      <SportAndHealthcare />
      <Footer/>
    </>
  )
}
