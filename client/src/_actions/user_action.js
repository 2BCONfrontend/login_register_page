import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    CHECK_DUPLICATE_NICKNAME,
    CHECK_DUPLICATE_ID,
    CHECK_DUPLICATE_EMAIL
} from './types';

// action: 상태 변화를 일으킬 때마다 참조하는 객체
// 1. 로그인
export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit) // 서버에 post 요청
    .then(response => response.data)
    return {
        type: LOGIN_USER,
        payload: request
    }
}
// 2. 회원 가입
export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit) // 서버에 post 요청
        .then(response => response.data)
    return {
        type: REGISTER_USER,
        payload: request
    }
}
// 3. 인증
export function auth() {

    const request = axios.get('/api/users/auth') // 서버에 get 요청
        .then(response => response.data)
    return {
        type: AUTH_USER,
        payload: request
    }
}
// 4. 닉네임 중복 확인
export function checkDuplicateNickname(dataToSubmit) {

    const request = axios.post('/api/users', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHECK_DUPLICATE_NICKNAME,
        payload: request
    }

}
// 5. 아이디 중복 확인
export function checkDuplicateId(dataToSubmit) {

    const request = axios.post('/api/users', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHECK_DUPLICATE_ID,
        payload: request
    }
}
// 6. 이메일 중복 확인
export function checkDuplicateEmail(dataToSubmit) {

    const request = axios.post('/api/users', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHECK_DUPLICATE_EMAIL,
        payload: request
    }
}
