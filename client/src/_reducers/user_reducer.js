import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    CHECK_DUPLICATE_NICKNAME,
    CHECK_DUPLICATE_ID,
    CHECK_DUPLICATE_EMAIL
} from '../_actions/types'; // 액션 종류

// reducer: 상태를 변화시키는 로직이 있는 함수
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        case CHECK_DUPLICATE_NICKNAME:
            return { ...state, permit: action.payload }
            break;
        case CHECK_DUPLICATE_ID:
            return { ...state, permit: action.payload }
            break;
        case CHECK_DUPLICATE_EMAIL:
            return { ...state, permit: action.payload }
        default:
            return state;
    }
}