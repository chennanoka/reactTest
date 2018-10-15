// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
    NEW_BLOG
  } from './constants';
  
  export const createBlog = (blog) => dispatch => {
    return dispatch({
      type: NEW_BLOG,
      newItem: blog
    })
  };
  
  
  export function reducer(state, action) {
    switch (action.type) {
      case NEW_BLOG:
        return {
          ...state,
          blogs: [...state.blogs, action.newItem]
  
        };
      default:
        return state;
    }
  }
  