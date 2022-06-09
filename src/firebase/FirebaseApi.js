import { DB } from './FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchArtworks = async () => await getDocs(collection(DB, 'artworks'));

export const fetchSeries = async () => await getDocs(collection(DB, 'series'));

export const fetchExhibitions = async () => await getDocs(collection(DB, 'exhibitions'));