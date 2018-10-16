import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILED
} from './constants';


export const getPost = () => dispatch => {
  return dispatch({
    type: GET_POST
  })
};

function getPostRequest() {
  return request('get', 'https://jsonplaceholder.typicode.com/posts');
}

function getQueryString(params) {
  const query = Object.keys(params)
    .filter(k => params[k] !== undefined && params[k] !== null)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');

  return query.length ? `?${query}` : '';
}

function request(method, url, params = {}) {
  const body = ['get', 'delete'].indexOf(method) === -1 ? params : undefined;
  const query = !body ? getQueryString(params) : undefined;
  return axios({
    method,
    url: `${url}${query || ''}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: JSON.stringify(body),
  })
    .then(response => response.data)
    .catch((err) => { throw err.response; });
}

export function* watchPost() {
  yield takeLatest(GET_POST, doGetPost);
}

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

function* doGetPost(action) {
  let res;
  try {
    yield delay(10000);
    res = yield call(getPostRequest);
  } catch (err) {
    yield put({
      type: GET_POST_FAILED,
      data: { error: err.data },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: GET_POST_SUCCESS,
    data: res,
  });
}

export function reducer(state, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        postPending: true,
        postError: null
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        postPending: false,
        postError: null,
        posts: action.data
      };

    case GET_POST_FAILED:
      return {
        ...state,
        postPending: false,
        postError: null
      };

    default:
      return state;
  }
}
