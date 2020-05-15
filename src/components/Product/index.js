import React from 'react'
import './styles.css'

const Product = ({product, addToCart}) =>
  <div key={product.id} className="product__container">
    <div className="product">
      <img src={product.imageURL} alt={product.caption} />
      <div className="stats">
          <div className="stats-container">
            <span className="product_price">${product.price}</span>
            <span className="product_name">{product.caption}</span>
          </div>
          <button onClick={()=> {addToCart(product)}}className="atc-btn">
            Add To Cart
          </button>
      </div>
    </div>
  </div>;

export default Product
