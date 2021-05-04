import { createStore } from 'redux';

function reducer (state, action) {
    switch (action.type) {
        case 'SET_ADS':
            return {
                ...state,
                ads: action.ads,
            };
        case 'FILTER': {
            return {
                ...state,
                filter: action.value,
            };
        }
        default:
            return state;
    }
}

const initialState = {
    ads: [],
    filter: 'All',
};

const store = createStore(reducer, initialState);

export default store;