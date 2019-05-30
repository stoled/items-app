import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item'

export default function ItemList() {
  return <div className="container mt-5">
    <div class="row">
      <Item />
    </div>
  </div>;
}

