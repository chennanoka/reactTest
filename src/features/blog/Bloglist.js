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
      <div>
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
      redirectProfile: false,
      redirectPost: false
    }
  }
  static propTypes = {
    blogs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  handleClick = () => { 
    this.setState({ ...this.state, redirectProfile: true});
  }


  componentWillUnmount() {  
  }

  componentDidMount() {  
  }

  componentWillMount() {  
  }

  componentDidUpdate() {  
  }

  componentWillUpdate() {  
  }




  onUserClick = (user) => {
    this.setState({ ...this.state, user: user, showUser: true });
  }

  onDeleteBlogClick = (id) => {
    this.props.actions.deleteBlog(id);
  }

  handleGetPostClick = () => {
    //fire async call
    this.props.actions.getPost(); 
    this.setState({ ...this.state, redirectPost: true}); 
  }


  render() {
    if (this.state.redirectPost) {
      return (
        <Redirect to="/blog/posts" />
      )
    }

    if (this.state.redirectProfile) {
      return (
        <Redirect to="/blog/profile" />
      )
    }
    const items = this.props.blogs.map(blog => (
      <BlogItem blog={blog} key={blog.id} onItemClick={this.onUserClick} onItemDeleteClick={this.onDeleteBlogClick} />
    ));
    let headerItem;
    if (this.state.showUser && this.state.user) {
      headerItem = (
        <div>
          <p>User Info</p>
          <p>{this.state.user.userId}</p>
          <p>{this.state.user.userName}</p>
          <br />
        </div>);
    }
    else {
      headerItem = (
        <div>
          <br />
          <button onClick={this.handleClick}>View Profile</button> 
        </div>);
    }

    return (
      <div>
        {headerItem}
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
