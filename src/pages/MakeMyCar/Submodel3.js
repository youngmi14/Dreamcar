import React, { Component } from "react";
import ModelVisible from "./ModelVisible";
import "./MakeMyCar.scss";

class Submodel3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subModels3: [],
      quattroporte: {
        name: "QUATTROPORTE",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/quattroporte/versions/quattroporte.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2979",
        acceleration: "5.5",
        maxSpeed: "270",
        maxPower: "350",
        driveType: "RWD",
      },
      quattroportes: {
        name: "QUATTROPORTE S Q4",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/quattroporte/versions/quattroporte-s-q4.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2979",
        acceleration: "4.8",
        maxSpeed: "288",
        maxPower: "430",
        driveType: "AWD",
      },
      quattroportediesel: {
        name: "QUATTROPORTE DIESEL",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/quattroporte/versions/quattroporte-diesel.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2987",
        acceleration: "6.4",
        maxSpeed: "252",
        maxPower: "275",
        driveType: "RWD",
      },
      quattroportegts: {
        name: "QUATTROPORTE GTS",
        version: "V8",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/quattroporte/versions/quattroporte-gts.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "3799",
        acceleration: "4.7",
        maxSpeed: "310",
        maxPower: "530",
        driveType: "RWD",
      },
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/submodel3.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            subModels3: res.QuattroporteData,
          },
          console.log("res:", res)
        );
      });
  };

  render() {
    const displayStyle = {
      display: "none",
    };
    const displayBlock = {
      display: "felx",
    };
    return (
      <div className="Submodels">
        <div className="samemodels">
          <ModelVisible
            name={this.state.quattroporte.name}
            version={this.state.quattroporte.version}
            carpic={this.state.quattroporte.carpic1[0]}
            displacement={this.state.quattroporte.displacement}
            acceleration={this.state.quattroporte.acceleration}
            maxSpeed={this.state.quattroporte.maxSpeed}
            maxPower={this.state.quattroporte.maxPower}
            driveType={this.state.quattroporte.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.quattroportes.name}
            version={this.state.quattroportes.version}
            carpic={this.state.quattroportes.carpic1[0]}
            displacement={this.state.quattroportes.displacement}
            acceleration={this.state.quattroportes.acceleration}
            maxSpeed={this.state.quattroportes.maxSpeed}
            maxPower={this.state.quattroportes.maxPower}
            driveType={this.state.quattroportes.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.quattroportediesel.name}
            version={this.state.quattroportediesel.version}
            carpic={this.state.quattroportediesel.carpic1[0]}
            displacement={this.state.quattroportediesel.displacement}
            acceleration={this.state.quattroportediesel.acceleration}
            maxSpeed={this.state.quattroportediesel.maxSpeed}
            maxPower={this.state.quattroportediesel.maxPower}
            driveType={this.state.quattroportediesel.driveType}
            dis={displayStyle}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.quattroportegts.name}
            version={this.state.quattroportegts.version}
            carpic={this.state.quattroportegts.carpic1[0]}
            displacement={this.state.quattroportegts.displacement}
            acceleration={this.state.quattroportegts.acceleration}
            maxSpeed={this.state.quattroportegts.maxSpeed}
            maxPower={this.state.quattroportegts.maxPower}
            driveType={this.state.quattroportegts.driveType}
            dis={displayBlock}
          />
        </div>
      </div>
    );
  }
}

export default Submodel3;
