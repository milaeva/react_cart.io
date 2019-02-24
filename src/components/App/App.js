import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductList from '../ProductListView';
import Product from '../ProductView';
// import {Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ProductList} exact />
        <Route path="/:product" component={Product} />
      </div>
    );
  }
}

export default App;
