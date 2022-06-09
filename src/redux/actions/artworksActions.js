import { FETCH_ALL_ARTWORKS, RESET_RANDOM_ARTWORK } from '../constants/actionTypes.js';
import { fetchArtworks } from '../../firebase/FirebaseApi.js';

export const getArtworks = () => async (dispatch) => {
    try {
        const querySnapshot = await fetchArtworks();
        const artworksData = querySnapshot.docs.map((snapshot) => ({ id: snapshot.id, data: snapshot.data() }))
        dispatch({ type: FETCH_ALL_ARTWORKS, payload: artworksData });
    } catch (error) {
        console.log(error);
    }
}

export const resetRandomArtwork = () => (dispatch) => {
    try {
        dispatch({ type: RESET_RANDOM_ARTWORK, payload: [] });
    } catch (error) {
        console.log(error);
    }
}