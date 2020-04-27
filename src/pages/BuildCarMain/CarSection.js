import React, { Component } from "react";
import SubSelection from "./SubSelection";
import Package from "./Package";
import CarAcc from "./CarAcc";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class CarSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnColor: "#fff",
      activeBtnId: 0,
      btnNameTab: "",
    };
    //this.carCont = React.createRef();
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.scrollToSection, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.scrollToSection);
  // }

  scrollToSection = () => {
    const lastScrollY = window.scrollY;
    console.log(this.carCont.offsetTop);

    // if (!ticking) {
    //   window.requestAnimationFrame(() => {
    //     this.carCont.current.style.top = `${lastScrollY}px`;
    //     ticking = false;
    //   });

    //   ticking = true;
    // }
  };

  btnTabcolorChange = (idx) => {
    console.log("함수진입:", idx); //1
    this.setState({
      activeBtnId: idx,
    });
    console.log("state btn:", this.state.activeBtnId); //0
  };

  render() {
    const btnName = ["외관", "휠", "브레이크 클리퍼"];
    const btnInteriorName = [
      "시트",
      "대시보드",
      "카펫",
      "스티어링 힐",
      "헤드라이닝",
      "트림",
    ];

    const settings = {
      dots: false,
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div
        className="CarSection"
        ref={(ref) => {
          this.carCont = ref;
        }}
      >
        <a name="carDisplay1"></a>

        <div className="carDisplayWrapper">
          <Slider {...settings}>
            <div>
              <img src="https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400" />
            </div>
            <div>
              <img src="https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400;plates" />
            </div>
            <div>
              <img src="https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400" />
            </div>
            <div>
              <img src="https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400" />
            </div>
          </Slider>
          <div className="carOutlookTapCont">
            <ul className="toolBar">
              {btnName.map((itemName, idx) => {
                return (
                  <li
                    role="button"
                    className={
                      this.state.activeBtnId === idx ? "btnClicked" : ""
                    }
                    // name={itemName}
                    onClick={() => this.btnTabcolorChange(idx)}
                  >
                    {itemName}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="selectionsCont">
            <div className="scrollSection">
              <SubSelection />
            </div>
          </div>
        </div>

        <div className="carDisplayWrapper">
          <Slider {...settings}>
            <div>
              <img src="https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400" />
            </div>
            <div>
              <img src="https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400;plates" />
            </div>
            <div>
              <img src="https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400" />
            </div>
            <div>
              <img src="https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400" />
            </div>
          </Slider>
          <div className="carOutlookTapCont">
            <ul className="toolBar">
              {btnInteriorName.map((itemName, idx) => {
                return (
                  <li
                    role="button"
                    className={
                      this.state.activeBtnId === idx ? "btnClicked" : ""
                    }
                    name={itemName}
                    onClick={() => this.btnTabcolorChange(idx)}
                  >
                    {itemName}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="selectionsCont">
            <div className="scrollSection">
              <SubSelection thisColor={this.state.btnNameTab} />
            </div>
          </div>
        </div>

        <Package />
        <p>
          *참고: 국가에 따라 패키지 구성의 필수 패키지 또는 옵션 등이 상이할 수
          있습니다. 각 패키지의 가격은 다른 패키지나 옵션의 추가 및 삭제에 의해
          변동될 수 있습니다.
        </p>

        <CarAcc />
      </div>
    );
  }
}

export default CarSection;
