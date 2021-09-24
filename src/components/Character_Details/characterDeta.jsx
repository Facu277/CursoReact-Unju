import React from "react";
import anime from "../../json/personaje.json"
import "./detallesstyle.css";
export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      currentElement: anime.Characters[0],
    };
  }
  onChangeInput = (event) => {
    this.setState(() => {
      return {
        currentElement: anime.Characters.find(
          (element) => element.id == event.target.value
        ),
      };
    });
  };
  render() {
    return (
      <div className="container">
        <select
          onChange={(event) => {
            this.onChangeInput(event);
          }}
        >
          {anime.Characters.map((element) => (
            <option value={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        <div className="container">
          <h3>
            {this.state.currentElement.name}
          </h3>
          <div>
            <img src={this.state.currentElement.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {this.state.currentElement.age + " años"}</p>
          <p> Ciudad: {this.state.currentElement.ciudad}</p>
          <p>Rango: {this.state.currentElement.rango}</p>
          <p>Asociacion: {this.state.currentElement.asociacion}</p>
        </div>
      </div>
    );
  }
}