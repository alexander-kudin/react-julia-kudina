/* eslint-disable import/no-anonymous-default-export */
export default (seriesList = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_SERIES':
            return action.payload; 
        default:
            return seriesList;
    }
}