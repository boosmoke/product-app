import React, { Component } from 'react';
import './styles.css';
import {CartItem} from '../../components';

export default class index extends Component {
  render() {
    const {cart, closeCart, removeFromCart} = this.props;
    return (
      <div className="modal cart">
        <h1>Cart</h1>
        <button className="close-cart-btn" onClick={()=> {closeCart()}}>X</button>
        {cart.length > 0 && cart.map((product, index)=> <CartItem key={index} product={product} removeFromCart={removeFromCart}/>)}
      </div>
    )
  }
}
