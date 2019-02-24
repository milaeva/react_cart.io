import './ProductList.css';
import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import SearchForm from '../SearchForm';
import data from '../../Data/phones.json';
// import {Switch, Route} from "react-router-dom";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      items: [...data],
      searchQuery: '',
      sortMethod: 'newest',
    };
  }

  changeSearchQuery = e => {
    this.setState({ searchQuery: e.target.value });
  };

  changeSortMethod = e => {
    this.setState({ sortMethod: e.target.value });
  };

  sortItems = (a, b) => {
    switch (this.state.sortMethod) {
      case 'newest': {
        return a.age - b.age;
      }
      case 'alpha': {
        return (a.name > b.name) - (a.name < b.name);
      }
    }
  };
  render() {
    const { items, searchQuery, sortMethod } = this.state;
    return (
      <div className="grid">
        <div className="grid-x">
          <div className="cell cell-1">
            <SearchForm
              searchQuery={searchQuery}
              handleInput={this.changeSearchQuery}
              sortMethod={sortMethod}
              handleSelect={this.changeSortMethod}
            />
          </div>
          <div className="cell cell-2">
            {items
              .filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .sort(this.sortItems)
              .map(item => (
                <ProductItem
                  key={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  snippet={item.snippet}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
