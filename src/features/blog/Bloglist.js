import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Newblog from './Newblog';
import { Redirect } from 'react-router-dom';


class BlogItem extends Component {
  handleClick = () => {
    this.props.onItemClick(this.props.blog.user);
  }

  handleDeleteClick = () => {
    this.props.onItemDeleteClick(this.props.blog.id);
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
              <th><button onClick={this.handleDeleteClick}>Delete</button></th>
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
      user: {},
      count: "",
      profile: false
    }
  }
  static propTypes = {
    blogs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.state.profile = true;
    this.setState(this.state);
  }

  componentWillUnmount() {
    this.state.count = "last execute componentWillUnmount";
  }

  componentDidMount() {
    this.state.count = "last execute componentDidMount";
  }

  componentWillMount() {
    this.state.count = "last execute componentWillMount";
  }

  componentDidUpdate() {
    this.state.count = "last execute componentDidUpdate";
  }

  componentWillUpdate() {
    this.state.count = "last execute componentWillUpdate";
  }




  onUserClick = (user) => {
    this.setState({ user: user, showUser: true });
  }

  onDeleteBlogClick = (id) => {
    this.props.actions.deleteBlog(id);
  }

  handleGetPostClick = () =>{
    this.props.actions.getPost();
  }

  render() {
    if (this.state.profile) {
      return (
        <Redirect to="/blog/profile" />
      )
    }
    const items = this.props.blogs.map(blog => (
      <BlogItem blog={blog} onItemClick={this.onUserClick} onItemDeleteClick={this.onDeleteBlogClick} />
    ));
    if (this.state.showUser && this.state.user) {
      headerItems = (
        <div>
          <p>User Info</p>
          <p>{this.state.user.userId}</p>
          <p>{this.state.user.userName}</p>
          <br />
        </div>);
    }
    else {
      headerItems = (
        <div>
          <br />
          <button onClick={this.handleClick}>View Profile</button>
          <p>LifeCycle Info:{this.state.count}</p>
        </div>)
    }
    return (
      <div>
        headerItems
        <button onClick={this.handleGetPostClick}>Get Post</button>
          <Newblog />
        <p>Blog List</p>
        {items}
      </div>
    );
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
