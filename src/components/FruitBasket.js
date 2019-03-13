import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} />
        <FilteredFruitList
          filter={props.selectedFilter} />
      </div>;

export default FruitBasket;
