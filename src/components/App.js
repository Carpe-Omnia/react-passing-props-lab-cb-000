import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


class App extends React.Component {
  constructor() {
    super() ;

  }
  render() {
    return (
      <FruitBasket />
    )
  }
}
export default App;
