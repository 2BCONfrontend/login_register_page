import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerReview } from '../../../_actions/write_action';
import { withRouter } from 'react-router';
import { Row, Col, Rate } from 'antd';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';
import { FaTags } from "react-icons/fa";

function WriteReviewPage(props) {

    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");         // 제목
    const [Program, setProgram] = useState("");     // 프로그램명
    const [Rating, setRating] = useState(0);        // 별점
    const [Category, setCategory] = useState("");   // 카테고리 (드라마, 영화, 예능)
    const [Netflix, setNetflix] = useState(false);
    const [Watcha, setWatcha] = useState(false);
    const [Tving, setTving] = useState(false);
    const [Content, setContent] = useState("");     // 내용

    const onTitleHandler = (event) => { setTitle(event.currentTarget.value); }
    const onProgramHandler = (event) => { setProgram(event.currentTarget.value); }
    const onRatingHandler = (value) => { setRating(value); }
    const onCategoryHandler = (event) => { setCategory(event.currentTarget.value); }
    const onNetflixHandler = () => { setNetflix(true); }
    const onWatchaHandler = () => { setWatcha(true); }
    const onTvingHandler = () => { setTving(true); }
    const onContentHandler = (event) => { setContent(event.currentTarget.value); }
    
    // 제출
    const onSubmitHandler = (event) => {
        event.preventDefault(); // refresh 방지

        if(Category === "") { return alert('카테고리를 설정해주세요') }

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

        console.log(body)

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
                    <div style={{ height: '36%' }}>
                        <Row>
                            <Col span={4}>제목</Col>
                            <Col span={20}>
                                <input value={Title} onChange={onTitleHandler} style={{ width: '100%', border: '0.5px solid #C4C4C4' }}/>
                            </Col>
                        </Row>
                        <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/>
                        <Row align="middle">
                            <Col xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 5 }}>프로그램</Col>
                            <Col xs={{ span: 18 }} sm={{ span: 19 }} md={{ span: 10 }}>
                                <input value={Program} onChange={onProgramHandler} style={{ width: '100%', border: '0.5px solid #C4C4C4' }}/>
                            </Col>
                            <Col xs={{ span: 3 }} md={{ span: 2, offset: 1 }} >별점</Col>
                            <Col xs={{ span: 21 }} md={{ span: 6 }}>
                                <Rate allowHalf value={Rating} onChange={onRatingHandler}/>
                            </Col>
                        </Row>
                        <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/>
                        <Row>
                            카테고리
                            <div style={{ marginLeft: '10px' }}>
                                <select value={Category} onChange={onCategoryHandler} >
                                    <option value="">선택</option>
                                    <option value="드라마">드라마</option>
                                    <option value="영화">영화</option>
                                    <option value="예능">예능</option>
                                </select>
                            </div>
                        </Row>
                        <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/> 
                        <Row>
                            <div style={{ marginLeft: '10px' }}><FaTags></FaTags></div>
                            <div style={{ marginLeft: '10px' }}>
                                <input 
                                    style={{ marginLeft: '10px' }} 
                                    type="radio" 
                                    value={Netflix} onChange={onNetflixHandler}
                                /> 넷플릭스 
                                <input 
                                    style={{ marginLeft: '10px' }}
                                    type="radio" value={Watcha} 
                                    onChange={onWatchaHandler}/> 왓챠 
                                <input 
                                    style={{ marginLeft: '10px' }}
                                    type="radio" value={Tving} 
                                    onChange={onTvingHandler}/> 티빙
                            </div>
                        </Row>
                        <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/> 
                    </div>
                    {/* 글 작성란 */}
                    <div style={{ height: '64%' }}>
                        <div style={{ height: '90%'}}>
                            <textarea 
                                value={Content} 
                                placeholder="내용을 입력하세요" 
                                onChange={onContentHandler}
                                style={{ width: '100%', height: '100%', border: '0.5px solid #C4C4C4' }}
                            ></textarea>
                        </div>
                        {/* 글 작성 버튼 */}
                        <div style={{ textAlign: 'center', marginTop: '5px'}}>
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

export default withRouter(WriteReviewPage)