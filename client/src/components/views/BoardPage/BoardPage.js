import React, {Component} from 'react';
import PropTypes from 'prop-types';

import HeaderNav from '../MainDesign/HeaderNav';
import SubNav from '../MainDesign/SubNav';
import UnderNav from '../MainDesign/UnderNav';

import ReviewInfo from './ReviewInfo';
import PurchaseInfo from './PurchaseInfo';
import FreeInfo from './FreeInfo';

class BoardPage extends Component { // 게시판

    constructor(props) {
        super(props);
        this.state = {
            selectedPosting: '',
            keyword: '',   // 검색용
            type: 'review',      // 리뷰 게시판, 공동 구매 게시판, 자유 게시판
            subtype: '',   // 서브 카테고리 (selectbox & subnavigation)
            data: '',
        };
    }

    showPostingDetail(key) { // 게시글 페이지 보여주기
        this.setState({
            selectedPosting: key
        });
    }

    render() {
        const mapToComponents = (data) => { // 게시글 목록 보이기
            data.sort(); // 데이터 정렬
            data = data.filter(
                (posting) => {
                    return posting.title.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            )
            return data.map((posting, i) => {
                switch(this.state.type){
                    case "review":          // 리뷰 게시판
                        return (<ReviewInfo 
                                    posting={posting}
                                    index={i}
                                    onClick={() => this.showPostingDetail(i)} />);
                    case "purchase":        // 공동 구매 게시판
                        return (<PurchaseInfo 
                                    posting={posting}
                                    index={i}
                                    onClick={() => this.showPostingDetail(i)} />);
                    case "free":            // 자유 게시판
                        return (<FreeInfo 
                                    posting={posting}
                                    index={i}
                                    onClick={() => this.showPostingDetail(i)} />);
                    default: return null;
                }
            })
        }

        class SelectBox extends Component { // 셀렉트 박스
            render() {
                const view = () => {
                    switch(this.state.type) {
                        case "review": 
                        case "purchase":
                            return (
                                <select>
                                    <option value="">전체</option>
                                    <option value="netflix">넷플릭스</option>
                                    <option value="watcha">왓챠</option>
                                    <option value="tving">티빙</option>
                                </select>
                            );
                        case "free":
                            return(
                                <select>
                                    <option value="">전체</option>
                                    <option value="netflix">정보</option>
                                    <option value="watcha">잡담</option>
                                    <option value="tving">질문</option>
                                </select>
                            );
                        default: return null;
                    }
                }
                return (
                    <p>{view}</p>
                );
            }
        }

        class Board extends Component { // 게시판
            render() {
                return (
                    <div id="board">
                        <SelectBox />
                        <input 
                            name="keyword" 
                            placeholder="Search" 
                            value={this.state.keyword}
                            onChange={this.handleChange} 
                        />
                        <div>{mapToComponents(this.state.data)}</div>
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
}

BoardPage.defaultProps = {
    data: { // 목록에서 보이는 게시글 정보
        tag: '',
        title: '',
        date: '',
        star: ''
    }
}

BoardPage.propTypes = {
    data: PropTypes.object
}

export default BoardPage;