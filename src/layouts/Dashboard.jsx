import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'


export default function Dashboard() {
  return (
    <div>    
      <Categories></Categories>
      <ProductList></ProductList>
    </div>
  )
}