import { SET_BACKGROUND, SET_NAV_LINK } from '../constants/actionTypes.js';

export const setBackground = (backgroundUrl) => (dispatch) => {
    try {
        const data = backgroundUrl
        dispatch({ type: SET_BACKGROUND, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const setNavLink = (name, href) => (dispatch) => {
    try {
        const data = { name: name, href: href }
        dispatch({ type: SET_NAV_LINK, payload: data })
    } catch (error) {
        console.log(error)
    }
}