import React, { Component } from "react";
import ColorPalette from "./ScrollSection";
import ScrollSection from "./ScrollSection";

class SubSelection extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    idxItem: 0,
    initVal: [
      {
        id: 1,
        name: "Nero",
        url:
          "https://www.configurator.maserati.com/cc/adm/repo/8578300/EXT/EXT/94084200/menu_icon.jpg",
      },
    ],
    selectedBtn: 0,
    selectedArr: [],
    nonSelectedArr: this.props.interiorColorData,
    isChecked: false,
  };

  componentDidMount = () => {
    this.getData();
  };

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

  handleButtonAddHandler = (item, idx) => {
    console.log("간것      :", item);

    this.setState({
      selectedBtn: idx,
    });
    const { selectedArr } = this.state;
    selectedArr.push(item.url);
  };

  render() {
    const { interiorColorData } = this.props;
    //const filtered = interiorColorData.filter((item, idx) => idx !== 0);
    //console.log("hiiiiii", this.props.btnThumbColorInt);

    return (
      <>
        {!this.props.btnThumbDescInt && (
          <ScrollSection
            stringValSolid={this.props.btnThumbDescSolid}
            colorSolid={this.props.btnThumbColorSolid}
            stringValMetal={this.props.btnThumbDescMetal}
            colorMetal={this.props.btnThumbColorMetal}
            stringValInt={this.props.btnThumbDescInt}
            colorInt={this.props.btnThumbColorInt}
          />
        )}
        {this.props.btnThumbDescInt && (
          <div className="scrollSection">
            <div className="subSelection">
              <h5 className="sectionTitle">{this.props.btnThumbDescInt}</h5>
              <div className="innerSection" style={{ display: "flex" }}>
                <div className="colorPalette">
                  <button>
                    <img
                      src="https://www.configurator.maserati.com/cc/adm/repo/8578300/EXT/EXT/94084200/menu_icon.jpg"
                      alt="initValue"
                    />
                  </button>
                  {this.state.selectedArr.map((item) => {
                    return (
                      <button>
                        <img src={item} alt="added" />
                      </button>
                    );
                  })}
                </div>
                <div className="twoTone">
                  <div>투톤 가죽 인테리어</div>
                  <div style={{ color: "#0b2749" }}>가죽 변경 ></div>
                </div>
                <div className="colorPalette">
                  {this.props.interiorColorData.map((item, idx) => {
                    return (
                      <button>
                        <img src={item.url} alt="altered" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SubSelection;
