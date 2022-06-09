/* eslint-disable import/no-anonymous-default-export */

let initialState = {
    artworkList: [],
    randomArtwork: null
};

const artworksReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_ALL_ARTWORKS':
            return { 
                artworkList: action.payload,
                randomArtwork: action.payload[Math.floor(Math.random() * action.payload.length)]
            };
        case 'RESET_RANDOM_ARTWORK':
            return { 
                ...state,
                randomArtwork: state.artworkList[Math.floor(Math.random() * state.artworkList.length)]
            };
        default:
            return state;
    }
}

export default artworksReducer;