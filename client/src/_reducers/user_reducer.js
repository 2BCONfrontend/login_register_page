import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    CHECK_DUPLICATE_NICKNAME,
    CHECK_DUPLICATE_ID,
    CHECK_DUPLICATE_EMAIL,
    GET_USER_INFO,
    GET_USER_POSTING,
    GET_USER_COMMENT,
    WITHDRAWER,
    CHANGE_USER_INFO,
    CHANGE_PASSWORD,
    LOGOUT_USER,
} from '../_actions/types';

export default function user (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        case LOGOUT_USER:
            return {...state }
        case CHECK_DUPLICATE_NICKNAME:
            return { ...state, permit: action.payload }
        case CHECK_DUPLICATE_ID:
            return { ...state, permit: action.payload }
        case CHECK_DUPLICATE_EMAIL:
            return { ...state, permit: action.payload }
        case GET_USER_INFO:
            return { ...state, success: action.payload }
        case GET_USER_POSTING:
            return { ...state, success: action.payload }
        case GET_USER_COMMENT:
            return { ...state, success: action.payload }
        case WITHDRAWER: 
            return { ...state, success: action.payload }
        case CHANGE_USER_INFO:
            return { ...state, success: action.payload }
        case CHANGE_PASSWORD:
            return { ...state, success: action.payload }
        default:
            return state;
    }
}