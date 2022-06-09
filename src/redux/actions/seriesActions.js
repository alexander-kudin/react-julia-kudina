import { FETCH_ALL_SERIES } from '../constants/actionTypes.js';
import { fetchSeries } from '../../firebase/FirebaseApi.js';

export const getSeries = () => async (dispatch) => {
    try {
        const querySnapshot = await fetchSeries();
        const seriesData = querySnapshot.docs.map((snapshot) => ({ id: snapshot.id, data: snapshot.data() }))
        dispatch({ type: FETCH_ALL_SERIES, payload: seriesData });
    } catch (error) {
        console.log(error);
    }
}