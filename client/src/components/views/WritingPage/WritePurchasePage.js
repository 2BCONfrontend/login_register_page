import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerPurchase } from '../../../_actions/write_action';
import { withRouter } from 'react-router';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

import './WritingPage.css';

function WritePurchasePage(props) {

    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");         // 제목
    const [Platform, setPlatform] = useState("");   // 플랫폼 (넷플릭스, 왓챠, 티빙)
    const [Content, setContent] = useState("");     // 내용
    const [State, setState] = useState("모집중");   // 모집여부
    const [Recruit, setRecruit] = useState();

    const onTitleHandler = (event) => { setTitle(event.currentTarget.value); }
    const onPlatformHandler = (event) => { setPlatform(event.currentTarget.value); }
    const onContentHandler = (event) => { setContent(event.currentTarget.value); }
    const onStateHandler = (event) => { setState(event.currentTarget.value); }
    const onRecruitHandler = (event) => { setRecruit(event.currentTarget.value); }
    
    // 제출
    const onSubmitHandler = (event) => {
        event.preventDefault(); // refresh 방지

        if(Platform === "") { return alert('플랫폼을 설정해주세요') }
        
        let body = {
            title: Title,
            platform: Platform,
            content: Content,
            state: State,
            recruit: Recruit
        }
        
        console.log(body)
        
        dispatch(registerPurchase(body))
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
                            플랫폼
                            <select id="platform" value={Platform} onChange={onPlatformHandler}>
                                <option value="">선택</option>
                                <option value="netflix">넷플릭스</option>
                                <option value="watcha">왓챠</option>
                                <option value="tving">티빙</option>
                            </select>
                            <hr size="1" noshade="noshade"/>
                            모집인원
                            <input id="recruit" value={Recruit} onChange={onRecruitHandler} />
                            <hr size="1" noshade="noshade"/>
                            <input name="complete" type="radio" checked="checked" value="모집중" onChange={onStateHandler} /> 모집중 
                            <input name="complete" type="radio" value="모집완료" onChange={onStateHandler}/> 모집완료 
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

export default withRouter(WritePurchasePage)