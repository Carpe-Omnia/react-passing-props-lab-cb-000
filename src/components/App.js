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
      fruit: []
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
      .then(fruit => this.setState({ fruit }));
  }
  render() {
    var list = !this.state.selectedFilter || this.state.selectedFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.selectedFilter);

    return (
      <FruitBasket
      handleChange={this.handleFilterChange}
      selectedFilter={this.state.selectedFilter}
      filters={this.state.filters}
      items={this.state.fruit}
      list={list}
      />
    )
  }
}
export default App;
