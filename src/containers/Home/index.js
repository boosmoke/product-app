import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Products, ProductFilters} from '../../components';
import * as storeActions from '../../actions/storeActions';
import Modal from '../Modal';

import './styles.css';

class Home extends Component {

  state = {
    inlineCart: true,
  }

  componentDidMount() {
    this.props.actions.getProducts();
  }

  

  render() {
    const {actions, products, cart} = this.props;

    const closeCart = () => {
      const cart = document.querySelector('.cart');
      if(cart) {
        cart.style = "transform: translateX(375px)";
      }
      setTimeout(() => {
        this.setState({inlineCart : !this.state.inlineCart})
      }, 500);
    }

    const toggleCart = () => {
      this.setState({inlineCart : !this.state.inlineCart})
    }
    return (
      <div className="home">
        <button onClick={()=>{toggleCart()}}className="cart-btn">
        {cart.length}</button>
        {this.state.inlineCart && <Modal closeCart={closeCart} removeFromCart={actions.removeFromCart} cart={cart}/>}
        <ProductFilters filterProducts={actions.filterProducts}/>
        <Products addToCart={actions.addToCart} products={products}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.storeReducer.products,
    cart: state.storeReducer.cart
  }),
  dispatch => ({
    actions: bindActionCreators(storeActions, dispatch)
  })
)(Home)
