import React, { Component } from 'react';
import './ItemList.scss';
import Item from '../Item/Item';
import { itemData } from '../itemData';

export default class ItemList extends Component {
  state={
    items: itemData
  }
  render() {
    const {items} = this.state;
    return (
      <div className="container mt-3">
        <div className="row">
          {items.map(item => {
            return (
              <Item key={item.id} item={item}/>
            );
          })}
        </div>
      </div>
    );
  }
}
