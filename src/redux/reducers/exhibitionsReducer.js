/* eslint-disable import/no-anonymous-default-export */

export default (exhibitionList = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_EXHIBITIONS':
            return action.payload; 
        default:
            return exhibitionList;
    }
}