import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions'; 


class PostItem extends Component {
    render() {
        return (
            <div key={this.props.post.id}>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
            </div>
        );
    }
}

class Posts extends Component {

    constructor(props) {
        super(props);
    }
    static propTypes = {
        posts: PropTypes.array.isRequired
    }


    render() { 
        const items = this.props.posts.map(post => (
            <PostItem post={post} />
        )); 
        return (
            <div>
            {items}
            </div>
        )
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        posts: state.blog.posts
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
)(Posts);
