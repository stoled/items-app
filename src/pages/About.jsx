import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

// import ItemList from '../components/ItemList/ItemList';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default About;
