import React, { Component } from 'react';

class FilteredFruitList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const list = !this.props.filter || this.props.filter === 'all' ? this.props.items : this.props.items.filter(i => i.fruit_type === this.props.filter);

    return (
      <ul className="fruit-list">
        {this.props.list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }
}

export default FilteredFruitList;
