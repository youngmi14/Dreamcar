import React, { Component } from "react";

class ScrollSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="scrollSection">
          <div className="subSelection">
            <h5 className="sectionTitle">{this.props.stringValSolid}</h5>
            <div className="innerSection">
              <div className="colorPalette">{this.props.colorSolid}</div>
            </div>
          </div>
        </div>

        <div className="scrollSection">
          <div className="subSelection">
            <h5 className="sectionTitle">{this.props.stringValMetal}</h5>
            <div className="innerSection">
              <div className="colorPalette">{this.props.colorMetal}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ScrollSection;
