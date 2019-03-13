import React, { Component } from 'react';

    const FilteredFruitList = props =>
      <ul className="fruit-list">
        {props.list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>;


export default FilteredFruitList;
