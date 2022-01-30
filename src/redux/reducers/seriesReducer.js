/* eslint-disable import/no-anonymous-default-export */
export default (allSeries = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_SERIES':
            return action.payload.docs.map((doc) => doc.data()); 
        default:
            return allSeries;
    }
}