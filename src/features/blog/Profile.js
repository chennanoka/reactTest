import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Profile extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="blog-profile">
      This is Profile
      <br/>
      <Link to="/blog" replace >Go Back</Link>
      </div>
    );
  }
}
