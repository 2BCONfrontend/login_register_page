import axios from 'axios';
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
    LOGOUT_USER
} from './types';

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

    const request = axios.post('/api/users/checkNickname', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHECK_DUPLICATE_NICKNAME,
        payload: request
    }

}
// 5. 아이디 중복 확인
export function checkDuplicateId(dataToSubmit) {

    const request = axios.post('/api/users/checkId', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHECK_DUPLICATE_ID,
        payload: request
    }
}
// 6. 이메일 중복 확인
export function checkDuplicateEmail(dataToSubmit) {

    const request = axios.post('/api/users/checkEmail', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHECK_DUPLICATE_EMAIL,
        payload: request
    }
}
// 7. 회원정보 가져오기
export function getUserInfo(dataToSubmit) {

    const request = axios.post('/api/users/getInfo', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: GET_USER_INFO,
        payload: request
    }
}
// 8. 작성한 글 가져오기
export function getUserPosting(dataToSubmit) {

    const request = axios.post('/api/users/getPosting', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: GET_USER_POSTING,
        payload: request
    }
}
// 9. 작성한 댓글 가져오기
export function getUserComment(dataToSubmit) {

    const request = axios.post('/api/users/getComment', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: GET_USER_COMMENT,
        payload: request
    }
}
// 10. 탈퇴하기
export function withdrawl(dataToSubmit) {

    const request = axios.post('/api/users/withdrawl', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: WITHDRAWER,
        payload: request
    }
}
// 11. 회원정보 변경하기
export function changeUserInfo(dataToSubmit) {

    const request = axios.post('/api/users/changeUserInfo', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHANGE_USER_INFO,
        payload: request
    }
}
// 12. 비밀번호 변경하기
export function changePassword(dataToSubmit) {

    const request = axios.post('/api/users/changePassword', dataToSubmit) // 서버에 get 요청
        .then(response => response.data)
    return {
        type: CHANGE_PASSWORD,
        payload: request
    }
}
// 13. 로그아웃
export function logoutUser(){
    const request = axios.get('/api/users/logout')
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}