import React from 'react'
import './styles.css'

const CartItem = ({product, removeFromCart}) =>
  <div key={product.prodId} className="product__container">
    <div className="product">
      <img src={product.imageURL} alt={product.caption} />
      <div className="stats">
          <div className="stats-container">
            <span className="product_price">${product.price}</span>
            <span className="product_name">{product.caption}</span>
          </div>
          <button onClick={()=>{removeFromCart(product.prodId)}} className="remove-btn">
            Remove
          </button>
      </div>
    </div>
  </div>;

export default CartItem;
