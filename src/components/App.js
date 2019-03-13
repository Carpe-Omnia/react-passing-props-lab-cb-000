import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


class App extends React.Component {
  constructor() {
    super() ;

    this.state = {
      filters: [],
      selectedFilter: null,
      items: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this) ;
    this.fetchFilters = this.fetchFilters.bind(this) ;
  }
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  componentWillMount() {
    this.fetchFilters();
  }
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }
  render() {
    return (
      <FruitBasket
      handleFilterChange={this.handleFilterChange}
      selectedFilter={this.state.selectedFilter}
      filters={this.state.filters}
      items={this.state.items}
      />
    )
  }
}
export default App;
