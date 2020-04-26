import React, { Component } from "react";
import "./LineCard.scss";

class LinesCard extends Component {
  render() {
    return (
      <div className="LineCard" role="group">
        <div className="preview">
          <div className="lineCarousel">
            <div className="arrowsCon"></div>
            <div className="slickSlider">
              <div className="itemSlickSlider">
                <div className="imagfigure">
                  <img
                    className="slidercarImg"
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/_trimstrategy/none/gallery1.jpg"
                    alt="carimgslider"
                  />
                </div>
              </div>
              <div className="itemSlickSlider"></div>
              <div className="itemSlickSlider"></div>
              <div className="itemSlickSlider"></div>
            </div>
          </div>
        </div>

        <div className="content">
          <button className="primaryCta" type="button">
            <span className="dataBu">선택</span>
          </button>
          <div className="cardTitle">
            <span className="dataK">Ghibli</span>
          </div>
          <div className="linesActions"></div>
          <div className="description">
            <span>
              Bold, graceful, assertive and elegant. Ghibli는(은) 비즈니스적
              세단과는 또 다른 감성을 선사합니다.
            </span>
          </div>
          <div className="detailDescription">
            Ghibli는(은) 마세라티 정신을 담고 있으며, 어떤 레이싱에서도 승리하기
            위한 혁신적인 요소들로 무장하고 있습니다. 고급스럽고 럭셔리한,
            우아하면서도 대담한, 감각적인 디자인과 혁신 기술을 포함하고 있으며,
            물론 고성능 퍼포먼스도 기본 사양으로 갖추고 있습니다.
          </div>
        </div>
      </div>
    );
  }
}

export default LinesCard;
