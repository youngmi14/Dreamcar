import React, { Component } from "react";
import LineCard from "./LineCard";
import "./LineWrapper.scss";

class LinesWrapper extends Component {
  render() {
    return (
      <div className="LinesWrapper">
        <LineCard />
        <div className="lineCard" role="group">
          <div className="preview">
            <div className="lineCarousel">
              <div className="arrowsCon"></div>
              <div className="slickSlider">
                <div className="slickList">
                  <div className="slickTrack">
                    <div className="itemSlickSlider">
                      <div className="imagfigure">
                        <img
                          className="slidercarImg"
                          src="https://www.configurator.maserati.com/cc/adm/repo/8578400/_trimstrategy/GranLusso/gallery1.jpg"
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
            </div>
          </div>
          <div className="content">
            <button className="primaryCta" type="button">
              <span className="dataBu">선택</span>
            </button>
            <div className="cardTitle">
              <span className="dataK">Ghibli GranLusso</span>
            </div>
            <div className="linesActions"></div>
            <div className="description">
              <span>
                모든 마세라티 모델에서 럭셔리함과 안락함을 느끼실 수 있습니다.
                Ghibli 그란루소 트림에서 제공되는 스페셜 패키지는 뛰어난
                스타일과 혁신적 기능들로 세단을 더욱 빛나게 합니다.
              </span>
            </div>
            <div className="detailDescription">
              기본 사양으로 제공되는 항목 외에도 다음 옵션을 제공합니다:
              <br />
              • 크롬 인서트가 장식된 프런트 범퍼
              <br />
              • 바디 컬러의 범퍼 하단 및 사이드 스커트
              <br />
              • 19" 휠
              <br />
              • Zegna 인테리어
              <br />
              • Radica 우드 트림
              <br />
              • 전동식 리어 선블라인드
              <br />• • 열선 가죽 우드 스티어링 휠
            </div>
          </div>
        </div>
        <div className="lineCard" role="group">
          <div className="preview">
            <div className="lineCarousel">
              <div className="arrowsCon"></div>
              <div className="slickSlider">
                <div className="slickList">
                  <div className="slickTrack">
                    <div className="itemSlickSlider">
                      <div className="imagfigure">
                        <img
                          className="slidercarImg"
                          src="https://www.configurator.maserati.com/cc/adm/repo/8578500/_trimstrategy/GranSport/gallery1.jpg"
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
            </div>
          </div>
          <div className="content">
            <button className="primaryCta" type="button">
              <span className="dataBu">선택</span>
            </button>
            <div className="cardTitle">
              <span className="dataK">Ghibli GranSport</span>
            </div>
            <div className="linesActions"></div>
            <div className="description">
              <span>
                마세라티 특유의 레이싱 DNA는 언제나 사람들의 이목을 집중
                시킵니다. Ghibli을(를) 통해 그란스포트 트림의 레이싱 DNA를 직접
                느껴보시기 바랍니다.
              </span>
            </div>
            <div className="detailDescription">
              기본 사양으로 제공되는 항목 외에도 다음 옵션을 제공합니다:
              <br />
              • 블루 인서트가 들어간 삼지창 로고, 새타 로고
              <br />
              • 피아노 블랙 인서트가 있는 스포츠 범퍼
              <br />
              • 바디 컬러의 사이드 스커트
              <br />
              • 19" 알로이휠
              <br />
              • 스포트 시트
              <br />
              • Black Piano 트림(S Q4)
              <br />• 열선 가죽 스포츠 스티어링 휠 및 패들쉬프트
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinesWrapper;
