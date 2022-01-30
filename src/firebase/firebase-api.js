import { db } from './firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

export const fetchArtworks = async () => getDocs(collection(db, 'artworks'));

export const fetchSeries = async () => getDocs(collection(db, 'series'));

export const fetchExhibitions = async () => getDocs(collection(db, 'exhibitions'));

// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);