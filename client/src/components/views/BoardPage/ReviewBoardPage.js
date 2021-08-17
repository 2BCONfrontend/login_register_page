import React, { useState, Component } from 'react';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

import ReviewInfo from './ReviewInfo';

import './BoardPage.css';

function ReviewBoardPage(props) { // 리뷰 게시판
    
    const [SelectedPost, setSelectedPost] = useState(""); // 선택된 게시물
    const [Option, setOption] = useState("");             // 게시판 하위 옵션
    const [Keyword, setKeyword] = useState("");           // 검색어
    const [Data, setData] = useState("");

    const showPostDetail = (key) => { 
        setSelectedPost(key);
        // 게시글 세부 사항 보여주는 것 구현 필요
    }

    const changeOption = (event) => { setOption(event.currentTarget.value); }
    const changeKeword = (event) => { setKeyword(event.currentTarget.value); }

    class SelectBox extends Component { // 셀렉트 박스
        render() {
            return (
                <div class="select_box">
                    <select>
                        <option value={Option} onChange={changeOption}>전체</option>
                        <option value={Option} onChange={changeOption}>넷플릭스</option>
                        <option value={Option} onChange={changeOption}>왓챠</option>
                        <option value={Option} onChange={changeOption}>티빙</option>
                    </select>
                    <input 
                            name="keyword" 
                            placeholder="Search" 
                            value={Keyword}
                            onChange={changeKeword}
                    />
                </div>
            );
        }
    }

    class Board extends Component { // 게시판 구성
        render() {
            return (
                <div id="body">
                    <div>
                        <SelectBox />
                        <div id="board">
                            <div id="posting_screen"></div>
                            <div id="advertisement"></div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="App">
            <HeaderNav />
            <SubNav />
            <Board />
            <UnderNav />
        </div>
    );
}

export default ReviewBoardPage;