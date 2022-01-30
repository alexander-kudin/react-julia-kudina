/* eslint-disable import/no-anonymous-default-export */

export default (exhibitions = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_EXHIBITIONS':
            return action.payload.docs.map((doc) => doc.data());; 
        default:
            return exhibitions;
    }
}