import React, { Component } from "react";
import Enemy from "./Enemy";

class EnemiesContainer extends Component {
  state = {
    name: "",
    color: "lightgreen",
    isWorst: false,
    location: "",
    enemyList: []
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // set the state, we want one general handle change fx, then set state based on that name and value
    // this.state.name
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    let enemyObj = {
      name: this.state.name,
      color: this.state.color,
      isWorst: this.state.isWorst,
      location: this.state.location
    };
    this.setState(
      {
        enemyList: [...this.state.enemyList, enemyObj]
      },
      () => console.log("my enemy list is", this.state.enemyList)
    );
  };
  renderEnemies = () => {
    return this.state.enemyList.map((enemy, index) => {
      return (
        <li key={index}>
          <Enemy {...enemy} />
        </li>
      );
    });
  };

  render() {
    return (
      <div className="enemy-container">
        <p className="subtle-text">Enemy Container</p>
        <div className="enemy-container-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enemy's name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              Color
              <select
                name="color"
                value={this.state.color}
                onChange={this.handleChange}
              >
                <option value="lightblue">LightBlue</option>
                <option value="lightgreen">LightGreen</option>
                <option value="salmon">Salmon</option>
                <option value="lavander">Lavander</option>
                <option value="pink">Pink</option>
              </select>
            </label>
            <label>
              isWorst
              <input
                name="isWorst"
                type="checkbox"
                checked={this.state.isWorst}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              Location
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              ></input>
            </label>
            <input type="submit" className="Submit" />
          </form>
        </div>
        <div className="enemy-list">
          <ul>{this.renderEnemies()}</ul>
        </div>
      </div>
    );
  }
}
export default EnemiesContainer;
