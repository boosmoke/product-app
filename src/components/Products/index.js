import React from 'react'
import {Product} from '../'
import './styles.css'

const Products = ({products, addToCart}) =>
  <div className="row products__container">
  {products.map((product, index) =>
    <Product key={index} addToCart={addToCart} product={product} />
  )}
  </div>;

export default Products


