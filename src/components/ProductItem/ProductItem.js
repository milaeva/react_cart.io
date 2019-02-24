import './ProductItem.css';
import React from 'react';

const ProductItem = ({ name, imageUrl, snippet }) => (
  <div className="mobile-card">
    <div className="mobile-card__img">
      <a href="#">
        <img src={require(`../../Data/${imageUrl}`)} alt={name} />
      </a>
    </div>
    <div className="mobile-card__text">
      <a href="#" className="mobile-card__title">
        {name}
      </a>
      <p className="mobile-card__descr">{snippet}</p>
    </div>
  </div>
);

export default ProductItem;
