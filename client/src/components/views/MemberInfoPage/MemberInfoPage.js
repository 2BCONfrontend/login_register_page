import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { 
    getUserInfo, getUserPosting, getUserComment, 
    withdrawl, changeUserInfo, changePassword
} from '../../../_actions/user_action';

import { Row, Col, Tabs, Input, Popconfirm, Modal, Form } from 'antd';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

import './MemberInfoPage.css'

function MemberInfoPage(props) {

    const dispatch = useDispatch();

    // 회원정보
    const [Nickname, setNickname] = useState("")
    const [Id, setId] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [RecentLogin, setRecentLogin] = useState("")
    const [RegisterDate, setRegisterDate] = useState("")

    const [Postings, setPostings] = useState([])
    const [Comments, setComments] = useState([])

    const [Load, setLoad] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => { setIsModalVisible(true); }
    const handleOk = () => { setIsModalVisible(false); }
    const handleCancel = () => { setIsModalVisible(false); }
    const onNicknameHandler = (event) => { setNickname(event.currentTarget.value); }
    const onPasswordHandler = (event) => { setPassword(event.currentTarget.value); }
    const onConfirmPasswordHandler = (event) => { setConfirmPassword(event.currentTarget.value); }


    const { TabPane } = Tabs;
    
    useEffect(() => {

        let body = { id: localStorage.getItem('userId') }

        dispatch(getUserInfo(body))
            .then(response => {
                if (response.payload.success) {
                    setNickname(response.payload.data.nickname)
                    setId(response.payload.data.id)
                    setEmail(response.payload.data.email)
                    setRegisterDate(response.payload.data.register_date)
                    setRecentLogin(response.payload.data.recent_login)
                    setPostings(response.payload.data.postings)
                    setComments(response.payload.data.comments)  
                } else {
                    return alert('Falied to load member info')
                }
            })

        dispatch(getUserPosting(body))
            .then(response => {
                if (response.payload.success) {
                    setPostings(response.payload.data.postings) 
                } else {
                    return alert('Falied to load member info')
                }
            })

        dispatch(getUserComment(body))
            .then(response => {
                if (response.payload.success) {
                    setPostings(response.payload.data.comments)  
                } else {
                    return alert('Falied to load member info')
                }
            })
        
        setLoad(true)
    }, [])

    const renderPostings = (posts) => {
        posts.sort(function(a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
        })
        return posts.map((post, i) => {
            return (
                <div style={{ maring: '0px' }}>
                    <Row>
                        <Col xs={{ span: 18 }} lg={{ span: 16 }}>
                            <div style={{ width: '98%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</div>
                        </Col>
                        <Col xs={{ span: 6 }} lg={{ span: 6 }}>
                            <div style={{ width: '98%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.date}</div>
                        </Col>
                        <Col xs={{ span: 0 }} lg={{ span: 2 }}>
                            <div style={{ width: '98%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.recommendation}</div>
                        </Col>
                    </Row>
                    <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/>
                </div>
            )
        })
    }

    const renderComments = (comments) => {
        comments.sort(function(a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
        })
        return comments.map((comment, i) => {
            return (
                <div style={{ maring: '0px' }}>
                    <Row>
                        <Col xs={{ span: 16 }} lg={{ span: 12 }}>
                            <div style={{ width: '98%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{comment.contents}</div>
                        </Col>
                        <Col xs={{ span: 8 }} lg={{ span: 8 }}>
                            <div style={{ width: '98%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{comment.origin_title}</div>
                        </Col>
                        <Col xs={{ span: 0 }} lg={{ span: 4 }}>
                            <div style={{ width: '98%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{comment.date}</div>
                        </Col>
                    </Row>
                    <hr size="1" noshade="noshade" style={{ border: '0.1px solid #C4C4C4' }}/>
                </div>
            )
        })
    }
    
    const onChangeUserInfo = () => {
        
        let body = { 
            id: Id,
            nickname: Nickname 
        }

        dispatch(changeUserInfo(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/member')
                } else {
                    return alert('Falied to change user info')
                }
            })
    }

    const onChangePassword = () => {

        console.log(Password)

        var passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,30}$/
        if(!passwordRegExp.test(Password)) { 
            return alert('비밀번호는 8자 이상 영문, 숫자 조합으로 설정해주세요.'); 
        }

        else { handleOk() }

        let body = { 
            id: Id,
            password: Password
        }
        
        dispatch(changePassword(body))
            .then(response => {
                if (response.payload.success) {
                    alert('변경 성공')
                } else {
                    return alert('Falied to change user password')
                }
            })
        
    }

    const onWithdrawl = () => {

        let body = { id: Id }

        dispatch(withdrawl(body))
            .then(response => {
                if (response.payload.success) {
                    alert('탈퇴 성공')
                } else {
                    return alert('Falied to change user password')
                }
            })
    }

    return (
        <div class="App">
            <HeaderNav />
            <SubNav />
                <div style={{
                    textAlign: 'center', margin: '0 auto', 
                    width: '80%', height: '500px'
                }}>
                    <Row style={{ height: '100%', margin: '25px auto', textAlign: 'left' }}>
                        <Col xs={{ span: 24 }} lg={{ span: 18 }}>
                            <div id="member_nav">
                                <Tabs defaultActiveKey="memberInfo" size="small">
                                    {/* 회원정보 창 */}
                                    <TabPane tab="회원정보 보기" key="memberInfo">
                                    {Load &&
                                    <div>
                                        <div 
                                            id="member_info" 
                                            style={{ border: '1px solid #C4C4C4', padding: '10px', fontSize: '13px', height: '340px' }}
                                        >
                                            <div style={{ fontWeight: 'bold' }}>회원정보</div>
                                            <br/>
                                            <div>
                                                닉네임<br />
                                                <Input 
                                                    style={{ 
                                                        width: '50%', marginTop: '5px', 
                                                        fontSize: '13px', border: '0.5px solid #C4C4C4' 
                                                    }}
                                                    size="small" 
                                                    value={Nickname} placeholder={Nickname}
                                                    onChange={onNicknameHandler}
                                                />
                                            </div>
                                            <hr size="1" noshade="noshade" style={{ border: '0.5px solid #C4C4C4' }}/>
                                            <div>
                                                아이디<br />{Id}
                                            </div>
                                            <hr size="1" noshade="noshade" style={{ border: '0.5px solid #C4C4C4' }}/>
                                            <div>
                                                가입일<br />{RegisterDate}
                                            </div>
                                            <hr size="1" noshade="noshade" style={{ border: '0.5px solid #C4C4C4' }}/>
                                            <div>
                                                최근 로그인<br />{RecentLogin}
                                            </div>
                                            <hr size="1" noshade="noshade" style={{ border: '0.5px solid #C4C4C4' }}/>
                                            <div>
                                                이메일<br />{Email}
                                            </div>
                                            <hr size="1" noshade="noshade" style={{ border: '0.5px solid #C4C4C4' }}/>
                                        </div>
                                        <div style={{ margin: '10px', textAlign: 'right' }}>
                                            <button 
                                                style={{ backgroundColor: '#97C2FF', color: 'white', 
                                                        padding: '5px 10px', marginLeft: '5px', fontSize: '13px',
                                                        border: '0', outline: '0', borderRadius: '0' }}
                                                onClick={showModal}
                                            > 
                                                비밀번호 변경 
                                            </button>
                                            <Modal title="비밀번호 변경" visible={isModalVisible} onOk={onChangePassword} onCancel={handleCancel}>
                                            <Form
                                                name="changePassword"
                                                onFinish={onChangePassword}
                                                scrollToFirstError
                                            >
                                                <Form.Item
                                                    name="password"
                                                    label="Password"
                                                    rules={[
                                                    {
                                                        required: true,
                                                    },
                                                    ]}
                                                    hasFeedback
                                                >
                                                    <Input.Password value={Password} onChange={onPasswordHandler}/>
                                                </Form.Item>

                                                <Form.Item
                                                    name="confirm"
                                                    label="Confirm"
                                                    dependencies={['password']}
                                                    hasFeedback
                                                    rules={[
                                                    {
                                                        required: true
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                            
                                                        return Promise.reject(new Error('두 비밀번호는 서로 일치해야 합니다.'));
                                                        },
                                                    }),
                                                    ]}
                                                >
                                                    <Input.Password value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                                                </Form.Item>
                                            </Form>
                                            </Modal>
                                            <button 
                                                style={{ backgroundColor: '#97C2FF', color: 'white', 
                                                        padding: '5px 10px', marginLeft: '5px', fontSize: '13px',
                                                        border: '0', outline: '0', borderRadius: '0' }}
                                                onClick={onChangeUserInfo}
                                            > 
                                                회원정보 변경
                                            </button>
                                            <Popconfirm
                                                title="정말로 탈퇴하시겠습니까?"
                                                onConfirm={onWithdrawl}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                            <button 
                                                style={{ backgroundColor: '#97C2FF', color: 'white', 
                                                        padding: '5px 10px', marginLeft: '5px', fontSize: '13px',
                                                        border: '0', outline: '0', borderRadius: '0' }}
                                            >
                                                탈퇴
                                            </button>
                                            </Popconfirm>
                                        </div>
                                    </div>
                                    }
                                    </TabPane>
                                    {/* 작성 글 창 */}
                                    <TabPane tab="작성 글 보기" key="writtenPost">
                                    {Load &&
                                    <div>
                                        <div 
                                            id="member_posting" 
                                            style={{ border: '1px solid #C4C4C4', padding: '10px', fontSize: '13px', height: '420px', overflow: 'auto' }}
                                        >   
                                        <Row style={{ fontWeight: 'bold' }}>
                                            <Col xs={{ span: 18 }} lg={{ span: 16 }}> 제목 </Col>
                                            <Col xs={{ span: 6 }} lg={{ span: 6 }}>작성일</Col>
                                            <Col xs={{ span: 0 }} lg={{ span: 2 }}>추천수</Col>
                                        </Row>
                                        <br />
                                        {renderPostings(Postings)}
                                        </div>
                                    </div>
                                    }
                                    </TabPane>
                                    {/* 작성 댓글 창 */}
                                    <TabPane tab="작성 댓글 보기" key="writtenComment">
                                    {Load &&
                                    <div>
                                        <div 
                                            id="member_comments" 
                                            style={{ border: '1px solid #C4C4C4', padding: '10px', fontSize: '13px', height: '420px', overflow: 'auto' }}
                                        >   
                                        <Row style={{ fontWeight: 'bold' }}>
                                            <Col xs={{ span: 16 }} lg={{ span: 12 }}> 댓글 </Col>
                                            <Col xs={{ span: 8 }} lg={{ span: 8 }}> 게시물 </Col>
                                            <Col xs={{ span: 0 }} lg={{ span: 4 }}> 작성일 </Col>
                                        </Row>
                                        <br />
                                            {renderComments(Comments)}
                                        </div>
                                    </div>
                                    }
                                    </TabPane>
                                </Tabs>
                            </div>
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

export default MemberInfoPage