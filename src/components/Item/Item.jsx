import React, { Component } from 'react';
import './ItemList.scss';

export default class ItemList extends Component {
  render() {
    const{ img, name, info } = this.props.item;
    return (
      <div className="col-lg-3 col-md-4 mb-4">
        <div className="card h-100">
          <a href="/">
            <img className="card-img-top" src={img} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{info}</p>
          </div>
        </div>
      </div>
    );
  }
}