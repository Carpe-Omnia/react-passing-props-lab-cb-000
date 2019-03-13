import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} filters={props.filters} />
        <FilteredFruitList filter={props.selectedFilter} items={props.items} list={props.list} />
      </div>;

export default FruitBasket;
