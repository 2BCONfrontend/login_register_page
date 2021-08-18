import axios from 'axios';
import { 
    REGISTER_REVIEW,
    REGISTER_PURCHASE,
    REGISTER_FREE
} from './types';

// 1. 리뷰 게시판 글 등록하기
export function registerReview(dataToSubmit) {

    const request = axios.post('/api/users/registerReview', dataToSubmit) // 서버에 post 요청
        .then(response => response.data)
    return {
        type: REGISTER_REVIEW,
        payload: request
    }
}
// 2. 공동 구매 게시판 글 등록하기
export function registerPurchase(dataToSubmit) {

    const request = axios.post('/api/users/registerPurchase', dataToSubmit) // 서버에 post 요청
        .then(response => response.data)
    return {
        type: REGISTER_PURCHASE,
        payload: request
    }
}
// 3. 자유 게시판 글 등록하기
export function registerFree(dataToSubmit) {

    const request = axios.post('/api/users/registerFree', dataToSubmit) // 서버에 post 요청
        .then(response => response.data)
    return {
        type: REGISTER_FREE,
        payload: request
    }
}