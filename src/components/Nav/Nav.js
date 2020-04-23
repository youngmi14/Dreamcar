import React, { Component } from "react";
import "./Nav.scss";

export class Nav extends Component {
  render() {
    return (
      <div className="NavCont">
        <h1 class="logo">
          <img src={require("../../images/NavLogo.png")} alt="NavLogo" />
        </h1>
        <ul class="NavLeft">
          <li class="model">
            <a href="#">
              <span className="arrowClose">모델</span>
            </a>
            <div class="subModelWrapper">
              <div class="subModelCont">
                <div class="model1">
                  <div class="Modletitle">Ghibli</div>
                  <div class="car">
                    <a href="#">
                      <img
                        src="https://www.maserati.com/content/dam/maserati/international/Models/default/2019/ghibli/ghibli_side.png.png/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"
                        alt="car"
                      />
                    </a>
                  </div>
                  <div class="moreBox">
                    <div class="moreView">자세히 보기</div>
                    <div class="myCarMake">내 차량 만들기</div>
                  </div>
                </div>

                <div class="model1">
                  <div class="Modletitle">Levante</div>
                  <div class="car">
                    <a href="#">
                      <img
                        src="https://www.maserati.com/content/dam/maserati/international/Models/default/2019/levante/levante_side_V2.png/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"
                        alt="car"
                      />
                    </a>
                  </div>
                  <div class="moreBox">
                    <div class="moreView">자세히 보기</div>
                    <div class="myCarMake">내 차량 만들기</div>
                  </div>
                </div>

                <div class="model1">
                  <div class="Modletitle">Quattroporte</div>
                  <div class="car">
                    <a href="#">
                      <img
                        src="https://www.maserati.com/content/dam/maserati/international/Models/default/2019/quattroporte/quattroporte_side.png/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"
                        alt="car"
                      />
                    </a>
                  </div>
                  <div class="moreBox">
                    <div class="moreView">자세히 보기</div>
                    <div class="myCarMake">내 차량 만들기</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="shopping model">
            <a href="#">
              <span className="arrowClose">쇼핑</span>
            </a>
            <div class="subModelWrapper">
              <div class="subModelCont shoppingCont">
                <div class="model1">
                  <div className="NavTitle">구매</div>
                  <p className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">딜러 찾기</span>
                    </a>
                  </p>
                  <p className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">시승 신청</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="promotion">
            <a href="#">프로모션</a>
          </li>
          <li className="service model">
            <a href="#">
              <span className="arrowClose">서비스&애프터세일즈</span>
            </a>
            <div class="subModelWrapper">
              <div class="introduceCont">
                <div className="content">
                  <div className="NavTitle">Service</div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">
                        사전구매 유지보수 프로그램
                      </span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">연장 보증</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티 고객지원</span>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="NavTitle">Utility</div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">차량 사용자 설명서</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">블루투스</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">클래식 차량 서비스</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">Safety & ADAS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">뉴스</a>
          </li>
          <li className="introduceCont model">
            <a href="#">
              <span className="arrowClose">브랜드</span>
            </a>
            <div className="subModelWrapper">
              <div className="introduceCont">
                <div className="content">
                  <div className="NavTitle">Our Story</div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티의 가치</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티의 역사</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티 클래식 카</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티 콘셉트 카</span>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="NavTitle">Our World</div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">
                        마스터 마세라티 드라이빙
                      </span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티 팩토리 투어</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">
                        마세라티 폴로 투어 2020
                      </span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">마세라티 스토어</span>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="NavTitle">Our Partners</div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">Ermenegildo Zegna</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">Bulgari</span>
                    </a>
                  </div>
                  <div className="Navfont">
                    <a href="#">
                      <span className="arrow90Deg">Shell</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">인증중고차</a>
          </li>
        </ul>
        <ul class="NavRight">
          <li class="search">
            <a href="#">딜러찾기</a>
          </li>
          <li class="apply">
            <a href="#">시승신청</a>
          </li>
          <li class="moreBtn">
            <a href="#">
              <img src={require("../../images/NavMore.png")} alt="NavMore" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
