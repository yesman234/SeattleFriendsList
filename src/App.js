import React, { Component } from "react";
import "./style.css";
import Profile from "./components/Profile";
import FriendsContainer from "./components/FriendsContainer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Profile name="Marcellus" />
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
