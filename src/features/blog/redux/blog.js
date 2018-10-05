// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_LIST, NEW_BLOG,ADD_COUNT
} from './constants';

export function getBlogs() {
  return {
    type: BLOG_LIST
  }
}

export const createBlog = (blog) => dispatch => {
  return dispatch({
    type: NEW_BLOG,
    newItem: blog
  })
};

export const addCount = () => dispatch =>  {
  return dispatch({
    type: ADD_COUNT
  })
};




export function reducer(state, action) {
  switch (action.type) {
    case BLOG_LIST:
      return {
        ...state,
      };
    case NEW_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.newItem]

      };
    case ADD_COUNT:
      return {
        ...state,
        userCount: state.userCount + 1
      }

    default:
      return state;
  }
}
