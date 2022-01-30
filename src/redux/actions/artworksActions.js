import { FETCH_ALL_ARTWORKS, RESET_RANDOM_ARTWORK } from '../constants/actionTypes.js';
import * as api from '../../firebase/firebase-api.js';

export const getArtworks = () => async (dispatch) => {
    try {
        const data = await api.fetchArtworks();
        const artworks = data.docs.map((doc) => doc.data());
        dispatch({ type: FETCH_ALL_ARTWORKS, payload: artworks });
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

// export const createPost = (post) => async (dispatch) => {
//     try {
//         const { data } = await api.createPost(post);
//         dispatch({ type: CREATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);
//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);
//         dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const likePost = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likePost(id);
        
//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }