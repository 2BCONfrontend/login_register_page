import React, { Component } from 'react';
import './App.css';
import { FaUserAlt } from "react-icons/fa";

class HeaderNav extends Component {
  render(){
    return (
      <nav>
        <ul class="header-nav">
          <li class="header-item"> <a href="#">2BCON</a> </li>
          <li class="header-login"> <a href="#"> {<FaUserAlt></FaUserAlt>} USER_ID </a> </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;