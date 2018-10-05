import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Newblog from './Newblog';


class BlogItem extends Component {
  handleClick = () => {
    this.props.onItemClick(this.props.blog.user);
  }

  render() {
    return ( 
      <div key={this.props.blog.id}>
        <h3>{this.props.blog.title}</h3>
        <p>{this.props.blog.body}</p>
        <table>
          <tbody>
            <tr>
              <th><button onClick={this.handleClick}>{this.props.blog.user.userName}</button></th>
              <th>{this.props.blog.date.toString()}</th>
            </tr>
          </tbody>
        </table>
      </div> 
    );
  }
}

export class Bloglist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showUser: false,
      user: {}
    }
  }
  static propTypes = {
    blogs: PropTypes.array.isRequired,
  };


  onUserClick = (user) => {
    this.setState({ user: user, showUser: true });
  }

  render() {
    const items = this.props.blogs.map(blog => (
        <BlogItem blog={blog}  onItemClick={this.onUserClick}/>
    ));
    if (this.state.showUser && this.state.user) {
      return (
        <div>
          <p>User Info</p>
          <p>{this.state.user.userId}</p>
          <p>{this.state.user.userName}</p>
          <br/>
          <Newblog />
          <p>Blog List</p>
          {items}
        </div>
      );
    } else {
      return (
        <div >
          <Newblog />
          <p>Blog List</p>
          {items}
        </div>
      );
    }
  }
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blogs: state.blog.blogs
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bloglist);
