import React, { useState, Component } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'; // 로그인 액션
import { withRouter, Link } from 'react-router-dom';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav.js';

import './LoginPage.css'

function LoginPage(props) { // 로그인 페이지

    const dispatch = useDispatch(); // dispatch: 액션을 스토어에 전달

    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")

    // 폼 값 입력
    const onIdHandler = (event) => { setId(event.currentTarget.value) }
    const onPasswordHandler = (event) => { setPassword(event.currentTarget.value) }

    // 제출
    const onSubmitHandler = (event) => {
        event.preventDefault(); // refresh 방지

        let body = {
            id: Id,
            password: Password
        }

        dispatch(loginUser(body)) // (loginUser: action 중 하나)
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('아이디나 비밀번호가 일치하지 않습니다.')
                }
            })
    }

    class LoginButton extends Component { // 로그인 버튼
        render() {
            return (
                <button id="login_button" onClick={onSubmitHandler}> 로그인 </button>
            );
        }
    }

    class LoginForm extends Component { // 로그인 폼
        render() {
            return (
                <form id = "login_form" onSubmit={onSubmitHandler}>
                    <input class="input" id="login_id" type="id" value={Id} onChange={onIdHandler} />
                    <br />
                    <input class="input" id="login_password" type="password" value={Password} onChange={onPasswordHandler} />
                    <br />
                    <div id="findIdPw">
                        <a href="#">아이디/비밀번호 찾기</a>
                    </div>
                    <LoginButton />
                    <br />
                </form>
            );
        }
    }

    class LoginPage extends Component { // 로그인 페이지
        render() {
            return (
                <div id ="login_page">
                    <div id="logo"></div>
                    <LoginForm />
                    <Link to = "../register">
                        <button id="register_button">회원 가입</button>
                    </Link>
                </div>
            );
        }
    }
    
    return (
        <div className="App">
            <HeaderNav />
            <SubNav />
            <LoginPage />
            <UnderNav />
        </div>
    )
}

export default withRouter(LoginPage)