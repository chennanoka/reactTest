// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
    ADD_COUNT
} from './constants';



export const addCount = () => dispatch => {
    return dispatch({
        type: ADD_COUNT
    })
};



export function reducer(state, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                userCount: state.userCount + 1
            };
        default:
            return state;
    }
}
