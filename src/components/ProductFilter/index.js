import React, { Component } from 'react';
import './styles.css';

export default class index extends Component {
  render() {
    const { filterProducts } = this.props;
    return (
      <div className="filters__bar">
        <button className="filter-btn" onClick={()=> {filterProducts('price')}}>
          Filter By Price
        </button>
        <button className="filter-btn" onClick={()=> {filterProducts('caption')}}>
          Filter By Title
        </button>
        <button className="filter-btn" onClick={()=> {filterProducts('brand')}}>
          Filter By Brand
        </button>
        <button className="filter-btn" onClick={()=> {filterProducts('isAvailable')}}>
          Filter By Availability
        </button>
      </div>
    )
  }
}
