import React, { Component } from 'react';
import Bloglist from './Bloglist';
import Newblog from './Newblog';
export default class Home extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="blog-home">
       <Bloglist/>
       <Newblog/>
      </div>
    );
  }
}
