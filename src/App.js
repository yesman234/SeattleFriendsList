import React, { Component } from "react";
import "./style.css";
import Profile from "./components/Profile";
import FriendsContainer from "./components/FriendsContainer";
import EnemiesContainer from "./components/EnemiesContainer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Profile name="Marcellus" />
        <FriendsContainer />
        <EnemiesContainer />
      </div>
    );
  }
}

export default App;
