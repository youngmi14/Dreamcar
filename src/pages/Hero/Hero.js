import React, { Component } from "react";
import Slider from "react-slick";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { MainHero1 } from "../../config";
import { MainHero2 } from "../../config";
import { MainHero3 } from "../../config";
import { MainHero4 } from "../../config";
import { MainHero5 } from "../../config";
import { MainHero6 } from "../../config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Hero.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      prevArrow: (
        <button type="button" class="slick-prev">
          <MaterialIcon icon="keyboard_arrow_left" size={45} />
        </button>
      ),
      nextArrow: (
        <button type="button" class="slick-prev">
          <MaterialIcon icon="keyboard_arrow_right" size={45} />
        </button>
      ),
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };

    return (
      <div className="Hero">
        <Slider {...settings}>
          <div>
            <img src={MainHero1} alt="Levante" />
            <div className="TextCt">
              <p>
                <span className="CarName">새 시대의 시작을 알리는 이름</span>
                <span className="Desc">새로운 이름을 공개합니다.</span>
              </p>
            </div>
            <div className="WhiteCt">자세히보기</div>
          </div>

          <div>
            <img src={MainHero2} alt="Levante" />
            <div className="TextCt">
              <p>
                <span className="CarName">Levante Trofeo</span>
                <span className="Desc">
                  마세라티 르반떼 라인업의 최상급 슈퍼 SUV
                </span>
              </p>
            </div>
            <div className="WhiteCt">자세히보기</div>
          </div>

          <div>
            <img src={MainHero3} alt="Levante" />
            <div className="TextCt">
              <p>
                <span className="CarName">Ghibli</span>
                <span className="Desc">The absolute opposite of ordinary</span>
              </p>
            </div>
            <div className="WhiteCt">자세히보기</div>
          </div>

          <div>
            <img src={MainHero4} alt="Levante" />
            <div className="TextCt">
              <p>
                <span className="CarName">Levante</span>
                <span className="Desc">The Maserati of SUVs</span>
              </p>
            </div>
            <div className="WhiteCt">자세히보기</div>
          </div>

          <div>
            <img src={MainHero5} alt="Levante" />
            <div className="TextCt">
              <p>
                <span className="CarName">Quattroporte</span>
                <span className="Desc">
                  The original race-bred luxury sedan.
                </span>
              </p>
            </div>
            <div className="WhiteCt">자세히보기</div>
          </div>

          <div>
            <img src={MainHero6} alt="Levante" />
            <div className="TextCt">
              <p>
                <span className="CarName">Levante GTS</span>
                <span className="Desc">Raise Your Expectation</span>
              </p>
            </div>
            <div className="WhiteCt">자세히보기</div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Hero;
