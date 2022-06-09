import { FETCH_ALL_EXHIBITIONS } from '../constants/actionTypes.js';
import { fetchExhibitions } from '../../firebase/FirebaseApi.js';

export const getExhibitions = () => async (dispatch) => {
    try {
        const querySnapshot = await fetchExhibitions();
        const exhibitionsData = querySnapshot.docs.map((snapshot) => ({ id: snapshot.id, data: snapshot.data() }))
        dispatch({ type: FETCH_ALL_EXHIBITIONS, payload: exhibitionsData });
    } catch (error) {
        console.log(error);
    }
}