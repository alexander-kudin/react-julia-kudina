/* eslint-disable import/no-anonymous-default-export */

let initialState = {
    artworks: [],
    randomArtwork: null
};

const artworksReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_ALL_ARTWORKS':
            return { 
                artworks: action.payload,
                randomArtwork: action.payload[Math.floor(Math.random() * action.payload.length)]
            };
        case 'RESET_RANDOM_ARTWORK':
            return { 
                ...state,
                randomArtwork: state.artworks[Math.floor(Math.random() * state.artworks.length)]
            };;
        default:
            return state;
    }
}

export default artworksReducer;