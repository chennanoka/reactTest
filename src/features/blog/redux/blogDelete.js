// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
    DELETE_BLOG
} from './constants';


export const deleteBlog = (id) => dispatch => {
    return dispatch({
        type: DELETE_BLOG,
        id: id
    })
} 

export function reducer(state, action) {
    switch (action.type) {
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.id !== action.id)
            }
        default:
            return state;
    }
}
