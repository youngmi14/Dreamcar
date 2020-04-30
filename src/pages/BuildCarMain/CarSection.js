import React, { Component } from "react";
import SubSelection from "./SubSelection";
import CarDisplayWrapper from "./CarDisplayWrapper";
import Package from "./Package";
import CarAcc from "./CarAcc";

class CarSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnColor: "#fff",
      activeBtnId: 0,
      btnNameTab: "",
      tabId: 0,
      btnThumbDescExt: {
        solid: "단색(SOLID) 색상",
        metalic: "메탈릭(METALLIC) 색상",
      },
      btnThumbDescInt: "가죽",
      // solidBtnColor: [],
      // metalBtnColor: [],
      exteriorBtnColor: [],
      interiorBtnColor: [],
      btnActiveInner: 0,
      // metalActiveInner: 0,
    };
    this.carCont = React.createRef();
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/CarColorData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("ffffffffffffffffffff", res);
        // this.setState(
        //   {
        //     exteriorBtnColor: res.ExteriorSkinData,
        //     // metalBtnColor: res.ExteriorSkinData.MetalColorData,
        //     interiorBtnColor: res.InteriorSkinData,
        //   },
        //   () => {
        //     console.log("extBtnnnnn  :", this.state.exteriorBtnColor);
        //   }
        // );
      });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollToSection);
  }

  scrollToSection = (tabId) => {
    let currentTop = this.carCont.getBoundingClientRect();
    console.log("current currentTop: ", currentTop);
  };

  btnActiveInner = (idx) => {
    this.setState({
      btnActiveInner: idx,
    });
  };

  // metalActiveInner = (idx) => {
  //   this.setState({
  //     metalActiveInner: idx,
  //   });
  // };

  render() {
    const { exteriorBtnColor, interiorBtnColor } = this.state;

    const btnExteriorName = ["외관", "휠", "브레이크 클리퍼"];
    const btnInteriorName = [
      "시트",
      "대시보드",
      "카펫",
      "스티어링 힐",
      "헤드라이닝",
      "트림",
    ];
    const imgUrlExterior = [
      "https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400;plates",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
    ];
    const imgUrlInterior = [
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx9?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q136/INT/94084213;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx10?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx11?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q136/INT/94084213;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx12?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400",
    ];

    const exteriorColor = exteriorBtnColor.map((carColor, idx) => {
      return (
        <button
          onClick={() => this.btnActiveInner(idx)}
          className={this.state.btnActiveInner === idx ? "active" : ""}
        >
          <img src={carColor.url} alt="solid Color" />
          <span className="iconName"></span>
        </button>
      );
    });

    // const metalColor = metalBtnColor.map((carColor, idx) => {
    //   return (
    //     <button
    //       onClick={() => this.metalActiveInner(idx)}
    //       className={this.state.metalActiveInner === idx ? "active" : ""}
    //     >
    //       <img src={carColor.url} alt="Metal Color" />
    //       <span className="iconName"></span>
    //     </button>
    //   );
    // });

    const interiorColor = interiorBtnColor.map((carColor) => {
      return (
        <button>
          <img src={carColor.url} alt="Interior Skin Color" />
        </button>
      );
    });

    const { btnThumbDescExt, btnThumbDescInt } = this.state;

    return (
      <div
        className="CarSection"
        ref={(ref) => {
          this.carCont = ref;
        }}
      >
        <a name="carExterior"></a>
        <CarDisplayWrapper
          btnTabName={btnExteriorName}
          imgUrl={imgUrlExterior}
          btnThumbDescSolid={btnThumbDescExt.solid}
          btnThumbDescMetal={btnThumbDescExt.metalic}
          btnThumbColorExterior={exteriorColor}
          // btnThumbColorMetal={metalColor}
        />

        <a name="carInterior"></a>
        <CarDisplayWrapper
          btnTabName={btnInteriorName}
          imgUrl={imgUrlInterior}
          btnThumbDescInt={btnThumbDescInt}
          btnThumbColorInt={interiorColor}
        />
        <a name="package"></a>
        <Package />
        <p>
          *참고: 국가에 따라 패키지 구성의 필수 패키지 또는 옵션 등이 상이할 수
          있습니다. 각 패키지의 가격은 다른 패키지나 옵션의 추가 및 삭제에 의해
          변동될 수 있습니다.
        </p>
        <a name="carAcc"></a>
        <CarAcc />
      </div>
    );
  }
}

export default CarSection;
