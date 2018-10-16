import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


class PostItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
            </div>
        );
    }
}

class Posts extends Component {

    constructor(props) {
        super(props);
        this.loadingDialogRef = React.createRef();
    }
    static propTypes = {
        posts: PropTypes.array.isRequired,
        postPending: PropTypes.bool.isRequired
    }

    componentDidMount() {
        this.props.postPending === true ? this.loadingDialogRef.current.style.display = "block" : this.loadingDialogRef.current.style.display = "none";
    }

    componentDidUpdate() {  
        this.props.postPending === true ? this.loadingDialogRef.current.style.display = "block" : this.loadingDialogRef.current.style.display = "none";
    }

    render() {
        const items = this.props.posts.map(post => (
            <PostItem post={post} key={post.id}/>
        ));

        const loadingDialog = (
            <div className="dialog-back" ref={this.loadingDialogRef}>
                <div className="dialog-content">
                    <div className="dialog-row">
                        <div className="dialog-col">
                            <div className="loader"></div>
                        </div>
                        <div className="dialog-col">
                            <p className="dialog-text">Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        ); 
        return (
            <div className="blog-posts">
                {loadingDialog}
                {items}
            </div>
        )
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        posts: state.blog.posts,
        postPending: state.blog.postPending
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
