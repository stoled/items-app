import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ItemList from '../components/ItemList/ItemList';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ItemList />
      </div>
    );
  }
}

export default Home;
