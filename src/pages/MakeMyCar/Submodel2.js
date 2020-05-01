import React, { Component } from "react";
import ModelVisible from "./ModelVisible";
import "./MakeMyCar.scss";

class Submodels2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subModels2: [],
      levante: {
        name: "Levante",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/levante/versions/levante.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2979",
        acceleration: "6.0",
        maxSpeed: "251",
        maxPower: "350",
        driveType: "AWD",
      },
      levanteS: {
        name: "Levante S",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/levante/versions/levante-s.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2979",
        acceleration: "5.2",
        maxSpeed: "264",
        maxPower: "430",
        driveType: "AWD",
      },
      levantediesel: {
        name: "Levante DIESEL",
        version: "V6",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/levante/versions/levante-diesel.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "2987",
        acceleration: "6.9",
        maxSpeed: "230",
        maxPower: "275",
        driveType: "AWD",
      },
      levantetrofeo: {
        name: "LEVANTE TROFEO",
        version: "V8",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/levante/versions/levante-trofeo.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "3799",
        acceleration: "3.9",
        maxSpeed: "304",
        maxPower: "580",
        driveType: "AWD",
      },
      levantegts: {
        name: "LEVANTE GTS",
        version: "V8",
        carpic1: [
          "https://www.maserati.com/content/dam/maserati/international/Models/default/2020/levante/versions/levante-gts.jpg/jcr:content/renditions/cq5dam.web.1800.10000.jpeg",
        ],
        displacement: "3799",
        acceleration: "4.2",
        maxSpeed: "292",
        maxPower: "530",
        driveType: "AWD",
      },
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/submodel2.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            subModels2: res.LevanteData,
          },
          console.log("res:", res)
        );
      });
  };

  render() {
    // const displayBlock = {
    //   display: "none",
    // };
    const displayBlock = {
      display: "felx",
    };
    return (
      <div className="Submodels">
        <div className="samemodels">
          <ModelVisible
            name={this.state.levante.name}
            version={this.state.levante.version}
            carpic={this.state.levante.carpic1[0]}
            displacement={this.state.levante.displacement}
            acceleration={this.state.levante.acceleration}
            maxSpeed={this.state.levante.maxSpeed}
            maxPower={this.state.levante.maxPower}
            driveType={this.state.levante.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.levanteS.name}
            version={this.state.levanteS.version}
            carpic={this.state.levanteS.carpic1[0]}
            displacement={this.state.levanteS.displacement}
            acceleration={this.state.levanteS.acceleration}
            maxSpeed={this.state.levanteS.maxSpeed}
            maxPower={this.state.levanteS.maxPower}
            driveType={this.state.levanteS.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.levantediesel.name}
            version={this.state.levantediesel.version}
            carpic={this.state.levantediesel.carpic1[0]}
            displacement={this.state.levantediesel.displacement}
            acceleration={this.state.levantediesel.acceleration}
            maxSpeed={this.state.levantediesel.maxSpeed}
            maxPower={this.state.levantediesel.maxPower}
            driveType={this.state.levantediesel.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.levantetrofeo.name}
            version={this.state.levantetrofeo.version}
            carpic={this.state.levantetrofeo.carpic1[0]}
            displacement={this.state.levantetrofeo.displacement}
            acceleration={this.state.levantetrofeo.acceleration}
            maxSpeed={this.state.levantetrofeo.maxSpeed}
            maxPower={this.state.levantetrofeo.maxPower}
            driveType={this.state.levantetrofeo.driveType}
            dis={displayBlock}
          />
        </div>
        <div className="samemodels">
          <ModelVisible
            name={this.state.levantegts.name}
            version={this.state.levantegts.version}
            carpic={this.state.levantegts.carpic1[0]}
            displacement={this.state.levantegts.displacement}
            acceleration={this.state.levantegts.acceleration}
            maxSpeed={this.state.levantegts.maxSpeed}
            maxPower={this.state.levantegts.maxPower}
            driveType={this.state.levantegts.driveType}
            dis={displayBlock}
          />
        </div>
      </div>
    );
  }
}

export default Submodels2;
