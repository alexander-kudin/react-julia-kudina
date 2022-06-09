/* eslint-disable import/no-anonymous-default-export */

let initialState = {
    backgroundUrl: '/images/julia-kudina.webp',
    navLink: { name: 'Home', href: '/' }
};

const artworksReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_BACKGROUND':
            return {
                ...state,
                backgroundUrl: action.payload
            };
        case 'SET_NAV_LINK':
            return {
                ...state,
                navLink: action.payload
            };
        default:
            return state;
    }
}

export default artworksReducer;