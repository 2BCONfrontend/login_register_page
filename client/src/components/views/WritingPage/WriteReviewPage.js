import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerReview } from '../../../_actions/write_action';
import { withRouter } from 'react-router';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

import { Rate } from 'antd';
import './WritingPage.css';

function WriteReviewPage(props) {

    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");
    const [Program, setProgram] = useState("");
    const [Rating, setRating] = useState(0);
    const [Category, setCategory] = useState("");
    const [Netflix, setNetflix] = useState(false);
    const [Watcha, setWatcha] = useState(false);
    const [Tving, setTving] = useState(false);
    const [Content, setContent] = useState("");

    const onTitleHandler = (event) => { setTitle(event.currentTarget.value); }
    const onProgramHandler = (event) => { setProgram(event.currentTarget.value); }
    const onRatingHandler = (value) => { setRating(value); }
    const onCategoryHandler = (event) => { setCategory(event.currentTarget.value); }
    const onNetflixHandler = (evnet) => { setNetflix(true); }
    const onWatchaHandler = (evnet) => { setWatcha(true); }
    const onTvingHandler = (evnet) => { setTving(true); }
    const onContentHandler = (event) => { setContent(event.currentTarget.value); }
    
    const onSubmitHandler = (event) => {
        event.preventDefault(); // refresh 방지

        let body = {
            title: Title,
            program: Program,
            rating: Rating,
            category: Category,
            netflix: Netflix,
            watcha: Watcha,
            tving: Tving,
            content: Content
        }

        dispatch(registerReview(body))
            .then(response => {
                if (response.payload.registerSuccess) {
                    alert("등록 성공!")
                    // 등록 후 글 열람 페이지 로드하도록...
                } else {
                    alert("Failed to register")
                }
            })
    }

    return (
        <div class ="App">
            <HeaderNav />
            <SubNav />
            {/* 바디 */}
            <div id="body">
                <div id ="writing_page">
                    {/* 글 작성 폼 */}
                    <form id="writing_form" onSubmit={onSubmitHandler}>
                        {/* 글 작성 헤더 */}
                        <div id="form_header">
                            제목<input id="title" value={Title} onChange={onTitleHandler} />
                            <hr size="1" noshade="noshade"/>
                            프로그램 찾기<input id="program" value={Program} onChange={onProgramHandler} />
                            별점 
                            <Rate allowHalf value={Rating} onChange={onRatingHandler} />
                            <hr size="1" noshade="noshade"/>
                            카테고리
                            <select id="category" value={Category} onChange={onCategoryHandler} >
                                <option value="">선택</option>
                                <option value="drama">드라마</option>
                                <option value="movie">영화</option>
                                <option value="entertainment">예능</option>
                            </select>
                            <hr size="1" noshade="noshade"/>
                            <input id="netflix" type="radio" value={Netflix} onChange={onNetflixHandler}/> 넷플릭스 
                            <input id="watcha" type="radio" value={Watcha} onChange={onWatchaHandler}/> 왓챠 
                            <input id="tiving" type="radio" value={Tving} onChange={onTvingHandler}/> 티빙
                            <hr size="1" noshade="noshade"/>
                        </div>
                        {/* 글 작성란 */}
                        <textarea id="writing_content" value={Content} placeholder="내용을 입력하세요" onChange={onContentHandler} ></textarea>
                        {/* 글 작성 버튼 */}
                        <div id="writing_button_area">
                            <button id="writing_button" onClick={onSubmitHandler}>등록</button>
                        </div>
                    </form>
                    <div id="advertisement">광고 자리</div>
                </div>
            </div>
            <UnderNav />
        </div>
    )
}

export default withRouter(WriteReviewPage)