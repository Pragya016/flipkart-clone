import React from 'react'
import ItemsList from './ItemsList'
import {sportsAndHealthcare} from '../data/sportsAndHealthcare'

export default function SportAndHealthcare() {
  return (
        <ItemsList items={sportsAndHealthcare} desc="Sports, Healthcare and More"/>
  )
}
