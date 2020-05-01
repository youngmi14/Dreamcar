import React, { Component } from "react";
import ModelVisible from "./ModelVisible";
import "./MakeMyCar.scss";

class Submodel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subModels1: [],

      ghibli: {
        name: "Ghibli",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/ghibli/versions/ghibli.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2979",
        acceleration: "5.5",
        maxSpeed: "267",
        maxPower: "350",
        driveType: "RWD",
      },
      ghiblisq4: {
        name: "Ghibli S Q4",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2019/ghibli/ghibli_front.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2979",
        acceleration: "4.7",
        maxSpeed: "286",
        maxPower: "430",
        driveType: "AWD",
      },
      ghiblidiesel: {
        name: "Ghibli DIESEL",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/ghibli/versions/ghibli-diesel.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2987",
        acceleration: "6.3",
        maxSpeed: "250",
        maxPower: "275",
        driveType: "RWD",
      },
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/submodel1.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            subModels1: res.GhibliData,
          },
          console.log("res:", res)
        );
      });
  };

  render() {
    //const { subModels1, subModels2, subModels3 } = this.state;
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
            name={this.state.ghibli.name}
            version={this.state.ghibli.version}
            carpic={this.state.ghibli.carpic1[0]}
            displacement={this.state.ghibli.displacement}
            acceleration={this.state.ghibli.acceleration}
            maxSpeed={this.state.ghibli.maxSpeed}
            maxPower={this.state.ghibli.maxPower}
            driveType={this.state.ghibli.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.ghiblisq4.name}
            version={this.state.ghiblisq4.version}
            carpic={this.state.ghiblisq4.carpic1[0]}
            displacement={this.state.ghiblisq4.displacement}
            acceleration={this.state.ghiblisq4.acceleration}
            maxSpeed={this.state.ghiblisq4.maxSpeed}
            maxPower={this.state.ghiblisq4.maxPower}
            driveType={this.state.ghiblisq4.driveType}
            dis={displayStyle}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.ghiblidiesel.name}
            version={this.state.ghiblidiesel.version}
            carpic={this.state.ghiblidiesel.carpic1[0]}
            displacement={this.state.ghiblidiesel.displacement}
            acceleration={this.state.ghiblidiesel.acceleration}
            maxSpeed={this.state.ghiblidiesel.maxSpeed}
            maxPower={this.state.ghiblidiesel.maxPower}
            driveType={this.state.ghiblidiesel.driveType}
            dis={displayBlock}
          />
        </div>
      </div>
    );
  }
}

export default Submodel1;
