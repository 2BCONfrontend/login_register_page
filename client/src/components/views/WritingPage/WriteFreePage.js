import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'
import { registerFree } from '../../../_actions/write_action';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

import './WritingPage.css';

function WriteFreePage(props) {

    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");         // 제목
    const [Category, setCategory] = useState("");   // 카테고리 (정보, 잡담, 질문)
    const [Content, setContent] = useState("");     // 내용

    const onTitleHandler = (event) => { setTitle(event.currentTarget.value); }
    const onCategoryHandler = (event) => { setCategory(event.currentTarget.value); }
    const onContentHandler = (event) => { setContent(event.currentTarget.value); }
    
    // 제출
    const onSubmitHandler = (event) => {
        event.preventDefault(); // refresh 방지

        if(Category === "") { return alert('분류를 설정해주세요') }

        let body = {
            title: Title,
            category: Category,
            content: Content
        }

        console.log(body)

        dispatch(registerFree(body))
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
                <Row id ="writing_page">
                    <Col flex={5}>
                        {/* 글 작성 폼 */}
                        <form id="writing_form" onSubmit={onSubmitHandler}>
                            {/* 글 작성 헤더 */}
                            <div id="form_header">
                                제목<input id="title" value={Title} onChange={onTitleHandler} />
                                <hr size="1" noshade="noshade"/>
                                분류
                                <select id="category" value={Category} onChange={onCategoryHandler}>
                                    <option value="">선택</option>
                                    <option value="정보">정보</option>
                                    <option value="잡담">잡담</option>
                                    <option value="질문">질문</option>
                                </select>
                                <hr size="1" noshade="noshade"/>
                            </div>
                            {/* 글 작성란 */}
                            <textarea id="writing_content" value={Content} placeholder="내용을 입력하세요" onChange={onContentHandler} ></textarea>
                            {/* 글 작성 버튼 */}
                            <div id="writing_button_area">
                                <button id="writing_button" onClick={onSubmitHandler}>등록</button>
                            </div>
                        </form>
                    </Col>
                    <Col id="advertisement" flex={2}>
                        <div>광고 자리</div>
                    </Col>
                </Row>
            </div>
            <UnderNav />
        </div>
    )
}

export default withRouter(WriteFreePage)