import React, { Component } from 'react';
import './App.css';
import { FaRegCalendarAlt } from "react-icons/fa";

class SubNav extends Component {
    render(){
      return (
        <nav>
          <ul class="main-nav">
            <li class="main-item"> <a href="#">리뷰</a> </li>
            <li class="main-item"> <a href="#">공구</a> </li>
            <li class="main-item"> <a href="#">자유</a> </li>
            <li class="main-item"> <a href="#"> {<FaRegCalendarAlt></FaRegCalendarAlt>} </a></li>
          </ul>
        </nav>
      );
    }
}

export default SubNav;