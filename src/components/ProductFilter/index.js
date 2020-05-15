import React, { Component } from 'react';
import './styles.css';

export default class index extends Component {
  render() {
    const { filterProducts } = this.props;
    return (
      <button className="filter-btn" onClick={()=> {filterProducts('price')}}>
        Filter By Price
      </button>
    )
  }
}
