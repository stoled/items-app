import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ItemList from '../components/ItemList/ItemList';

class Home extends Component {
  render() {
    return (
      <div className="pb-auto">
        <Navbar />
        <main role="main" className="flex-shrink-0">
          <h1>Home</h1>
          <ItemList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
