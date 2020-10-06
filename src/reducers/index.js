// import { combineReducer } from 'redux';

let defaultState = {
    categoryData: [],
    loading: false,
    error: ''
}

// const allReducers = combineReducer({
//     categoryData: categoryData
// })


const mainReducer = (state = defaultState, action) => {
    if (action.type === 'GET_CATEGORY') {
        return {
            ...state,
            loading: false,
            categoryData: action.payload,
            error: ''
        }
    } else if (action.type === 'SHOW_FAILURE') {
        return {
            loading: false,
            error: action.payload,
            error: ''
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default mainReducer;