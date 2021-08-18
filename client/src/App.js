import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import WriteReviewPage from "./components/views/WritingPage/WriteReviewPage";
import WritePurchasePage from "./components/views/WritingPage/WritePurchasePage";
import WriteFreePage from "./components/views/WritingPage/WriteFreePage";
import Auth from './hoc/auth'

// 로그인 한 회원은 진입 못하는 페이지: Login Page, Register Page

function App() { // (option: null, false, true)
  return(
    <Router>
      <Switch>
        <Route exact path = "/" component = {Auth(LandingPage, null)} />
        <Route path = "/login" component = {Auth(LoginPage, false)} />
        <Route path = "/register" component = {Auth(RegisterPage, false)} />

        <Route path = "/writing" component = {WriteReviewPage} />
        <Route path = "/writing2" component = {WritePurchasePage} />
        <Route path = "/writing3" component = {WriteFreePage} />
      </Switch>
    </Router>
  )
}
export default App;