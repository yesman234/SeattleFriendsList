import React, { Component } from "react";

export default class Friend extends Component {
  render() {
    return (
      <div
        className="friend-component"
        style={{ background: this.props.color }}
      >
        <div className="friend-header">
          {this.props.isFavorite && (
            <span role="img" aria-label="Star">
              ⭐️
            </span>
          )}
          <p className="subtle-text">Friend Component</p>
        </div>
        <div className="friend-contact">
          <h4>{this.props.name}</h4>
          {this.props.location && <h4>{this.props.location}</h4>}
        </div>
        <div className="skill-list" />
      </div>
    );
  }
}
