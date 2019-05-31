import React, { Component } from 'react';
import './Header.scss';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="container jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          </div>
        </div>
      </div>     
    );
  }
}

