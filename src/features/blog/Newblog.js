import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from './model/User';
import * as actions from './redux/actions';


export class Newblog extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    userCount:PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.counter = 0;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    var self = this;
    e.preventDefault();
    const blog = {
      title: this.state.title,
      body: this.state.body,
      date: new Date(),
      user: new User(guid(), "user" + (self.props.userCount)),
      id:guid()
    }
    this.props.actions.addCount();
    this.props.actions.createBlog(blog);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          <br />
          <input type="text" name="body" onChange={this.onChange} value={this.state.body} />
          <br />
          <input type="submit" value="new post" />
        </form>
      </div>
    );
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return { 
    userCount:state.blog.userCount
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
)(Newblog);
