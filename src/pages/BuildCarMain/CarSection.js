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
      solidBtnColor: [],
      metalBtnColor: [],
      interiorBtnColor: [],
      //imgUrlExterior: [],
      imgUrlExterior: [
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400;plates",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
      ],
      selectedColor: 0,
      imgUrlInterior: [
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx9?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q136/INT/94084213;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx10?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx11?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q136/INT/94084213;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx12?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400",
      ],
    };
    this.carCont = React.createRef();
  }

  componentDidMount = () => {
    this.getData();
    //window.addEventListener("click", this.onClickOutsideHandler);
  };

  // componentDidMount = async () => {

  //   const urls = await fetch(
  //     "http://localhost:3000/data/exterior-image-urls.json"
  //   ).then((res) => res.json());

  //   this.setState({
  //     imgUrlExterior: urls,
  //   });

  //   await this.getData();
  //   this.getData();
  // };

  getData = () => {
    fetch("http://localhost:3000/data/CarColorData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          solidBtnColor: res.ExteriorSkinData.SolidColorData,
          metalBtnColor: res.ExteriorSkinData.MetalColorData,
          interiorBtnColor: res.InteriorSkinData,
        });
      });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollToSection);
  }

  scrollToSection = (tabId) => {
    let currentTop = this.carCont.getBoundingClientRect().y;
    console.log("current currentTop: ", currentTop);
  };

  // onClickHandler() {
  //   this.setState((currentState) => ({
  //     isOpen: !currentState.isOpen,
  //   }));
  // }

  // onClickOutsideHandler = (e) => {
  //   if (this.state.isOpen && !this.toggleContainer.current.contains(e.target)) {
  //     this.setState({ isOpen: false });
  //   }
  // };

  // <Slider
  //   urls={this.urls[this.selectedColor]}
  // >
  // </Slider>

  handleOpacity = (e, idx) => {
    //const { imgUrlChanged } = this.state;
    e.preventDefault();
    console.log("currentINdex   :", idx);

    this.setState({
      selectedColor: idx,
    });

    switch (idx) {
      // case 0:
      //   this.setState({
      //     selectedColor: idx,
      //   });
      //   break;

      case 0:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084200;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084200;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084200;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084200;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;

      case 1:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;
      case 2:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084207;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084207;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084207;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084207;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;
      case 3:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084206;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084206;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084206;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084206;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;

      case 4:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084202;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084202;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084202;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084202;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;

      case 5:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;

      case 6:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;

      case 7:
        this.setState({
          imgUrlExterior: [
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084305;INT/INT/94084350;BOE/Q136/INT/94084350;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084296;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084210;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084305;INT/INT/94084350;BOE/Q136/INT/94084350;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084296;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084210;glasses_front;MEC/Q400;plates",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx3?config=background;shadow;CRPT/CRPT/94084305;RUF/ROO1/94084296;INT/INT/94084350;BOE/Q136/INT/94084350;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084210;MEC/Q5EM;glasses_front;MEC/Q400",
            "https://ph.cloud.maserati.com/8578300/1280/c720/gfx5?config=background;shadow;CRPT/CRPT/94084305;RUF/ROO1/94084296;INT/INT/94084350;BOE/Q136/INT/94084350;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084210;MEC/Q5EM;glasses_front;MEC/Q400",
          ],
        });
        break;
    }
  };

  render() {
    const {
      solidBtnColor,
      metalBtnColor,
      interiorBtnColor,
      imgUrlExterior,
    } = this.state;

    const btnExteriorName = ["외관", "휠", "브레이크 클리퍼"];
    const btnInteriorName = [
      "시트",
      "대시보드",
      "카펫",
      "스티어링 힐",
      "헤드라이닝",
      "트림",
    ];

    //컴포넌트 변수
    const solidColor = solidBtnColor.map((carColor, idx) => {
      return (
        <>
          <div
            style={{
              top: "-999999px",
              position: "fixed",
              overflow: "hidden",
              left: "-9999px",
              height: "1px",
              width: "1px",
              opacity: 0.01,
            }}
          >
            {imgUrlExterior}
          </div>

          <button type="button" onClick={(e) => this.handleOpacity(e, idx)}>
            <img src={carColor.url} alt="Solid Color" />
          </button>
        </>
      );
    });

    const metalColor = metalBtnColor.map((carColor, idx) => {
      return (
        <button type="button" onClick={() => this.handleOpacity(idx)}>
          <img src={carColor.url} alt="Metal Color" />
        </button>
      );
    });

    const interiorColor = interiorBtnColor.map((carColor) => {
      return (
        <button type="button">
          <img src={carColor.url} alt="Interior Skin Color" />
        </button>
      );
    });

    const { btnThumbDescExt, btnThumbDescInt, imgUrlInterior } = this.state;

    return (
      <div
        className="CarSection"
        ref={(ref) => {
          this.carCont = ref;
        }}
        style={{ position: "relative" }}
      >
        <a name="carExterior"></a>

        {/* <div class="preloadimage">
          {imgUrlExterior.map((urlsets) =>
            urlsets.map((url) => <img url={url} />)
          )}
        </div> */}

        {/* .preloadimage {
          img {
            position: fixed;
            left: -9999px;
            top: -9999px;
            width: 2px;
            height: 2px;
            overflow: hidden;
          }
        } */}

        {/* <div
          style={{
            top: "-999999px",
            position: "fixed",
            overflow: "hidden",
            left: "-9999px",
            height: "1px",
            width: "1px",
            opacity: 0.01,
          }}
        >
          {imgUrlExterior}
        </div> */}

        <CarDisplayWrapper
          btnTabName={btnExteriorName}
          imgUrl={imgUrlExterior}
          btnThumbDescSolid={btnThumbDescExt.solid}
          btnThumbDescMetal={btnThumbDescExt.metalic}
          btnThumbColorSolid={solidColor}
          btnThumbColorMetal={metalColor}
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
