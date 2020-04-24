import React, { Component } from "react";

class SubSelection extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    SolidColorData: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/SolidColorData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          SolidColorData: res.SolidColorData,
        });
      });
  };

  render() {
    const { SolidColorData } = this.state;

    const solidBtnColor = SolidColorData.map((carColor) => {
      return (
        <button>
          <img src={carColor.url} />
        </button>
      );
    });

    return (
      <div className="scrollSection">
        <div className="subSelection">
          <h5 className="sectionTitle">단색(SOLID) 색상</h5>
          <div className="innerSection">
            <div className="colorPalette">
              {/* <button>
                <img src="" />
              </button> */}
              {solidBtnColor}
              <button>
                <img src="" />
              </button>
            </div>
          </div>
        </div>

        <div className="subSelection">
          <h5 className="sectionTitle">메탈릭(METALLIC) 색상</h5>
          <div className="innerSection">
            <div className="colorPalette">
              {/* 넣어줄곳 */}
              {/* <button>
                <img src="" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubSelection;
