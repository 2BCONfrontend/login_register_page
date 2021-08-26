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
import MemberInfoPage from "./components/views/MemberInfoPage/MemberInfoPage";
import Auth from './hoc/auth'

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path = "/" component = {Auth(LandingPage, null)} />
        <Route path = "/login" component = {Auth(LoginPage, false)} />
        <Route path = "/register" component = {Auth(RegisterPage, false)} />
        
        {/* 아래 내용 추후에 수정 필요 */}
        <Route path = "/writing" component = {WriteReviewPage} />
        <Route path = "/writing2" component = {WritePurchasePage} />
        <Route path = "/writing3" component = {WriteFreePage} />
        <Route path = "/member" component = {MemberInfoPage} />
      </Switch>
    </Router>
  )
}
export default App;