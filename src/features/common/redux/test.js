// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da


// import axios from 'axios';
import initialState from './initialState';
import {
  COMMON_TEST,
  FETCH_POST
} from './constants';

export function test() {
  return {
    type: COMMON_TEST,
  };
}

export const fetchPosts = () => dispatch => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts
        }));
};  
// export function fetchPosts(args = {}) {
//   return dispatch => {  
//     const promise = new Promise((resolve, reject) => { 
//       const doRequest = axios.get('https://jsonplaceholder.typicode.com/posts');

//       doRequest.then(
//         res => {
//           dispatch({
//             type: FETCH_POST,
//             data: res.data,
//           });
//           resolve(res);
//         }
//       );
//     });

//     return promise;
//   };
// }

export function reducer(state = initialState, action) {
  switch (action.type) {
    case COMMON_TEST:
      return {
        ...state,
      };
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
}
