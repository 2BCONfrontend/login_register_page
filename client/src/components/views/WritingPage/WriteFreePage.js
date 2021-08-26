import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'
import { registerFree } from '../../../_actions/write_action';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

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
            <div style={{
                textAlign: 'center', margin: '0 auto', 
                width: '80%', height: '500px'
            }}>
            <Row style={{ height: '100%', margin: '25px auto', textAlign: 'left' }}>
                <Col xs={{ span: 24 }} lg={{ span: 18 }}>
                    {/* 글 작성 폼 */}
                    <form 
                        style={{ 
                            height: '100%', padding: '10px',
                            textAlign: 'left', fontSize: '13px', 
                            border: '1.5px solid #C4C4C4', borderRadius: '0.5em' 
                        }} 
                        onSubmit={onSubmitHandler}
                    >
                        {/* 글 작성 헤더 */}
                        <div style={{ height: '15%' }}>
                            <Row>
                                <Col span={4}>제목</Col>
                                <Col span={20}>
                                    <input value={Title} onChange={onTitleHandler} style={{ width: '100%', border: '0.5px solid #C4C4C4' }}/>
                                </Col>
                            </Row>
                            <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/>
                            <Row>
                                <Col span={4}>분류</Col>
                                <Col span={20}>
                                <select 
                                    value={Category} 
                                    onChange={onCategoryHandler}
                                >
                                    <option value="">선택</option>
                                    <option value="정보">정보</option>
                                    <option value="잡담">잡담</option>
                                    <option value="질문">질문</option>
                                </select>
                                </Col>
                            </Row>
                            <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/>
                        </div>
                        {/* 글 작성란 */}
                        <div style={{ height: '85%' }}>
                            <div style={{ height: '90%'}}>
                                <textarea 
                                    value={Content} 
                                    placeholder="내용을 입력하세요" 
                                    onChange={onContentHandler}
                                    style={{ width: '100%', height: '100%', border: '0.5px solid #C4C4C4' }}
                                ></textarea>
                            </div>
                            {/* 글 작성 버튼 */}
                            <div style={{ textAlign: 'center', marginTop: '8px'}}>
                                <button 
                                    style={{ 
                                        width: '5em', backgroundColor: 'white', 
                                        border: '2px solid #C4C4C4', borderRadius: '0.2em'
                                    }}
                                    onClick={onSubmitHandler}
                                >
                                    등록
                                </button>
                            </div>
                        </div>
                    </form>
                    </Col>
                    <Col xs={{ span: 0 }} lg={{ span: 6 }}>
                        <div style={{ height: '100%', marginLeft: '20px', backgroundColor: '#C4C4C4' }}>
                            광고창
                        </div>
                    </Col>
                </Row>
            </div>
            <UnderNav />
        </div>
    )
}

export default withRouter(WriteFreePage)