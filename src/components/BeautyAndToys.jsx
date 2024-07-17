import React from 'react'
import ItemList from './ItemsList';
import { beautyProducts } from '../data/beautyProducts';

export default function BeautyAndToys() {
  return (
    <ItemList items={beautyProducts} desc="Best of Beauty"/>
  )
}
