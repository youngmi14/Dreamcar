import React, { Component } from "react";
import LineCard from "./LineCard";
import "./LineWrapper.scss";

class LinesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ghibli: {
        dataK: "Ghibli",
        img: [
          "https://www.configurator.maserati.com/cc/adm/repo/8578300/_trimstrategy/none/gallery1.jpg",
        ],
        desspan:
          "Bold, graceful, assertive and elegant. Ghibli는(은) 비즈니스적 세단과는 또 다른 감성을 선사합니다.",
        des:
          "Ghibli는(은) 마세라티 정신을 담고 있으며, 어떤 레이싱에서도 승리하기 위한 혁신적인 요소들로 무장하고 있습니다. 고급스럽고 럭셔리한, 우아하면서도 대담한, 감각적인 디자인과 혁신 기술을 포함하고 있으며, 물론 고성능 퍼포먼스도 기본 사양으로 갖추고 있습니다.",
      },
      ghibliGranLusso: {
        dataK: "Ghibli GranLusso",
        img: [
          "https://www.configurator.maserati.com/cc/adm/repo/8578400/_trimstrategy/GranLusso/gallery1.jpg",
        ],
        desspan:
          "모든 마세라티 모델에서 럭셔리함과 안락함을 느끼실 수 있습니다. Ghibli 그란루소 트림에서 제공되는 스페셜 패키지는 뛰어난 스타일과 혁신적 기능들로 세단을 더욱 빛나게 합니다.",
        des: "기본 사양으로 제공되는 항목 외에도 다음 옵션을 제공합니다:",
        desc: [
          "• 크롬 인서트가 장식된 프런트 범퍼",
          "• 바디 컬러의 범퍼 하단 및 사이드 스커트",
          '• 19" 휠',
          "• Zegna 인테리어",
          "• Radica 우드 트림",
          "• 전동식 리어 선블라인드",
          "•• 열선 가죽 우드 스티어링 휠",
        ],
      },
      ghibligsli: {
        dataK: "GhibGhibli GranSportli",
        img: [
          "https://www.configurator.maserati.com/cc/adm/repo/8578500/_trimstrategy/GranSport/gallery1.jpg",
        ],
        desspan:
          "마세라티 특유의 레이싱 DNA는 언제나 사람들의 이목을 집중시킵니다. Ghibli을(를) 통해 그란스포트 트림의 레이싱 DNA를 직접느껴보시기 바랍니다.",
        des: "기본 사양으로 제공되는 항목 외에도 다음 옵션을 제공합니다:",
        desc: [
          "• 블루 인서트가 들어간 삼지창 로고, 새타 로고",
          "• 피아노 블랙 인서트가 있는 스포츠 범퍼",
          "• 바디 컬러의 사이드 스커트",
          '• 19" 알로이휠',
          "• 스포트 시트",
          "• Black Piano 트림(S Q4)",
          "•• 열선 가죽 스포츠 스티어링 휠 및 패들쉬프트",
        ],
      },
    };
  }

  render() {
    return (
      <div className="LinesWrapper">
        <LineCard
          dataK={this.state.ghibli.dataK}
          img={this.state.ghibli.img}
          desspan={this.state.ghibli.desspan}
          des={this.state.ghibli.des}
          desc={[]}
        />
        <LineCard
          dataK={this.state.ghibliGranLusso.dataK}
          img={this.state.ghibliGranLusso.img}
          desspan={this.state.ghibliGranLusso.desspan}
          des={this.state.ghibliGranLusso.des}
          desc={this.state.ghibliGranLusso.desc}
        />
        <LineCard
          dataK={this.state.ghibligsli.dataK}
          img={this.state.ghibligsli.img}
          desspan={this.state.ghibligsli.desspan}
          des={this.state.ghibligsli.des}
          desc={this.state.ghibligsli.desc}
        />
      </div>
    );
  }
}

export default LinesWrapper;
