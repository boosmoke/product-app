import React, { Component } from 'react';
import './styles.css';

export default class index extends Component {
  render() {
    const { filterProducts } = this.props;
    return (
      <div className="filters__bar">
        <h3>Filters</h3>
        <button className="filter-btn" onClick={()=> {filterProducts('price')}}>
          Price
        </button>
        <button className="filter-btn" onClick={()=> {filterProducts('caption')}}>
          Title
        </button>
        <button className="filter-btn" onClick={()=> {filterProducts('brand')}}>
          Brand
        </button>
        <button className="filter-btn" onClick={()=> {filterProducts('isAvailable')}}>
          Availability
        </button>
      </div>
    )
  }
}
