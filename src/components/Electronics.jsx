import React from 'react'
import ItemsList from './ItemsList'
import { electronics } from '../data/electronics'

export default function Electronics() {
  return (
          <ItemsList items={electronics} desc="Best of Electronics" />
  )
}
