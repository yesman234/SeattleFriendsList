// in order to use React, we need to import what we
// need from it!
import React, { Component } from "react";

//we create a new class, Profile, which extends the abstract (generic) React Component class
class Profile extends Component {
  //each Component needs to render
  render() {
    /* each Component also needs to return something 
    // from its render!
    */
    return (
      /* This should look familiar -- it's just
      // like HTML! Sort of! It is JSX.
      // notice that a "class" attribute in react is
      // "className"
      */
      <div className="profile">
        <p className="subtle-text">
          profile component
        </p>
        {this.props.name && <h3>Welcome {this.props.name}</h3>}
      </div>
    );
  }
}

export default Profile;

// exporting allows you to use this in other places --
// don't worry too much about the "default" part of it // right now.
