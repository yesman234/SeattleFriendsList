import React, { Component } from "react";

export default class Enemy extends Component {
  render() {
    return (
      <div className="enemy-component" style={{ background: this.props.color }}>
        <div className="enemy-header">
          {this.props.isWorst && (
            <span role="img" aria-label="ZombieGirl">
              🧟‍♀️
            </span>
          )}
          <p className="subtle-text">Enemy Component</p>
        </div>
        <div className="enemy-contact">
          <h4>{this.props.name}</h4>
          {this.props.location && <h4>{this.props.location}</h4>}
        </div>
        <div className="skill-list" />
      </div>
    );
  }
}
