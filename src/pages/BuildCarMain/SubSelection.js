import React, { Component } from "react";

class SubSelection extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    SolidColorData: [],
    MetalColorData: [],
    InteriorSkinData: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/CarColorData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          SolidColorData: res.SolidColorData,
          MetalColorData: res.MetalColorData,
          InteriorSkin: res.InteriorSkinData,
        });
        console.log(res.MetalColorData);
      });
  };

  render() {
    const { SolidColorData, MetalColorData, InteriorSkinData } = this.state;

    const solidBtnColor = SolidColorData.map((carColor) => {
      return (
        <button>
          <img src={carColor.url} alt="Solid Color" />
        </button>
      );
    });

    const metalBtnColor = MetalColorData.map((carColor) => {
      return (
        <button>
          <img src={carColor.url} alt="Metal Color" />
        </button>
      );
    });

    const interiorBtnColor = InteriorSkinData.map((carColor) => {
      return (
        <button>
          <img src={carColor.url} alt="Interior Skin Color" />
        </button>
      );
    });

    return (
      <div className="scrollSection">
        <div className="subSelection">
          <h5 className="sectionTitle">단색(SOLID) 색상</h5>
          <div className="innerSection">
            <div className="colorPalette">{solidBtnColor}</div>
          </div>
        </div>

        <div className="subSelection">
          <h5 className="sectionTitle">메탈릭(METALLIC) 색상</h5>
          <div className="innerSection">
            <div className="colorPalette">{metalBtnColor}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubSelection;
