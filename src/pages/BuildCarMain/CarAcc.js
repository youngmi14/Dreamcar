import React, { Component } from 'react';
import './CarAcc.scss'
export class CarAcc extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        };
    }

    Plus = (e) => {
        console.log(e.target)
        if(this.state.number > 9) {
            return 0;
        }
        this.setState({
        [e.target.name]: this.state.number + 1
        });
    }

    Minus = () => {
        if(this.state.number < 1) {
            return 0;
        }

        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div className="CarAcc">
                <h2 className="title">액세서리</h2>
                <div className="carOutlookTapCont">
                    <ul className="toolBar">
                        <li><span>전체</span></li>
                        <li><span>관리 및 보호</span></li>
                        <li><span>안전</span></li>
                        <li><span>기술 및 기능</span></li>
                        <li><span>이동 및 적재 솔루션</span></li>
                        <li><span>타이어 및 휠</span></li>
                    </ul>
                </div>
                <div className="selectionsCont">
                    <ul className="scrollSection">
                        <li className="cardBox">
                            <div className="productImg"><img src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg" alt="img" /></div>
                            <div className="informationBtn">
                                <span><img src={require("../../images/CarAccInformationBtn.PNG")} alt="information" /></span>
                                <h3><a href="#">충전 유지 장치</a></h3>
                            </div>
                            <div className="countBtn">
                                <button className="minusBtn" type="button" onClick={this.Minus}>-</button>
                                <span className="count">{this.state.number}</span>
                                <button className="plusBtn" name="plus1" type="button" onClick={this.Plus} >+</button>
                            </div>
                        </li>
                        
                        <li className="cardBox">
                            <div className="productImg"><img src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg" alt="img" /></div>
                            <div className="informationBtn">
                                <span><img src={require("../../images/CarAccInformationBtn.PNG")} alt="information" /></span>
                                <h3><a href="#">충전 유지 장치</a></h3>
                            </div>
                            <div className="countBtn">
                                <button className="minusBtn" type="button" onClick={this.Minus} >-</button>
                                <span className="count">{this.state.number}</span>
                                <button className="plusBtn" type="button" onClick={this.Plus} >+</button>
                            </div>
                        </li>

                        <li className="cardBox">
                            <div className="productImg"><img src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg" alt="img" /></div>
                            <div className="informationBtn">
                                <span><img src={require("../../images/CarAccInformationBtn.PNG")} alt="information" /></span>
                                <h3><a href="#">충전 유지 장치</a></h3>
                            </div>
                            <div className="countBtn">
                                <button className="minusBtn" type="button" onClick={this.Minus} >-</button>
                                <span className="count">{this.state.number}</span>
                                <button className="plusBtn" type="button" onClick={this.Plus} >+</button>
                            </div>
                        </li>

                        <li className="cardBox">
                            <div className="productImg"><img src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg" alt="img" /></div>
                            <div className="informationBtn">
                                <span><img src={require("../../images/CarAccInformationBtn.PNG")} alt="information" /></span>
                                <h3><a href="#">충전 유지 장치</a></h3>
                            </div>
                            <div className="countBtn">
                                <button className="minusBtn" type="button" onClick={this.Minus} >-</button>
                                <span className="count">{this.state.number}</span>
                                <button className="plusBtn" type="button" onClick={this.Plus} >+</button>
                            </div>
                        </li>
                    
                    </ul>
                    <div class="accMore">
                        <span>액세서리 더 보기</span>
                        <span className="accMoreImg"><img src={require("../../images/CarAccMore.PNG")} alt="more" /></span>
                    </div>
                </div>
                <p>* 일부 옵션은 이전에 사용했던 패키지에 이미 포함되어 있거나 패키지의 일부로 선택된 옵션과 호환되지 않아 제공되지 않을 수 있습니다. 이 옵션을 선택하려면 이전에 선택된 패키지를 수정하십시오.</p>
                <div className="priceCheck">
                    <p><span>최종가격 확인하기:</span></p>
                    <div className="button">완료하고 요약 보기</div>
                </div>
            </div>
        )
    }
}

export default CarAcc;
