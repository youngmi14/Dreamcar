import React, { Component } from "react";

class ScrollSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { colorExterior } = this.props;
    // console.log(colorExterior);

    // const solid = colorExterior.filter(item, idx, (arr) => arr.length <= 1);
    // const metal = colorExterior.filter(item, idx, (arr) => arr.length >= 1);

    return (
      <>
        <div className="scrollSection">
          <div className="subSelection">
            <h5 className="sectionTitle">{this.props.stringValSolid}</h5>
            <div className="innerSection">
              {/* {solid.map((solidIt) => {
                <div className="colorPalette">{solidIt}</div>;
              })} */}
              <div className="colorPalette">{this.props.colorExterior}</div>
            </div>
          </div>
        </div>

        {/* <div className="scrollSection">
          <div className="subSelection">
            <h5 className="sectionTitle">{this.props.stringValMetal}</h5>
            <div className="innerSection">
              <div className="colorPalette">{this.props.colorExterior}</div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default ScrollSection;
