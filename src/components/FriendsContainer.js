import React, { Component } from 'react';
import Friend from './Friend';
class FriendContainer extends Component {
  state = {
    name: '',
    color: 'lightblue',
    isFavorite: false,
    location: '',
    friendsList: []
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // set the state, we want one general handle change fx, then set state based on that name and value
    // this.state.name
    this.setState({
      [name] : value
    })
  }
  // if(target.type === 'checkbox') val ==== target.checked, else
  // val ===target.value
handleSubmit = (event) => {
  event.preventDefault();
  // so when you click submit it doesn't refresh
  // then create friend obj
  let friendObject = {
    name: this.state.name,
    color: this.state.color,
    isFavorite: this.state.isFavorite,
    location: this.state.location
  }
  // setting state for freiends list, setting friendslist state to, what it's doing, dots bringing up from this.state.friends list and add friend obj at end, so then friends list will be set to new value which is the two added together. spread operator, add cb fx bc after its done setting friend state see if its working add cb
  // ... means give me all that this state was prev plus friendObject
  // put cb at end to see friends list state
  this.setState({
    friendsList: [...this.state.friendsList, friendObject]
  }, () => console.log('my friends list is',
  this.state.friendsList))
}
renderFriends = () => {
  // going to return this.state.friendslist which is an array of obs so going to run a map on it, params are two obs that come back friend and index
  return this.state.friendsList.map((friend, index) => {
    return(
      // using index as a key is not good, not scalable
      // but we are doing it bc no db in demo,
      // key has to be string
      <li key={index}>
        <Friend {...friend}/> 
  
      </li>
    )
  })
}
  render() {
    return (
      <div className='friend-container'>
        <p className='subtle-text'>
          Friend Container
        </p>
      <div className = 'friends-container-form'>
      <form onSubmit={this.handleSubmit}>
        <label>
        Friend's name
        <input
        type='text'
        name='name'
        value={this.state.name}
        onChange={this.handleChange}
        >
        </input>
        </label>
        <label>
        Color
        <select
        name='color'
        value={this.state.color}
        onChange={this.handleChange}
        >
        <option value='lightblue'>LightBlue</option>
        <option value='lightgreen'>LightGreen</option>
        <option value='salmon'>Salmon</option>
        <option value='lavender'>Lavender</option>
        <option value='pink'>Pink</option>
        </select>
        </label>
    <label>
    isFavorite
    <input
      name='isFavorite'
      type='checkbox'
      checked={this.state.isFavorite}
      onChange={this.handleChange}
    >
    </input>
    </label>
    <label>
      Location
      <input
      type='text'
      name='location'
      value={this.state.location}
      onChange={this.handleChange}
      >
      </input>
    </label>
    <input
    className='Submit'
    type='submit'
    />
      </form>
</div>
      <div className='friends-list'>
        <ul>
          {this.renderFriends()}
        </ul>
    </div>
    </div>
    )
  }
}
export default FriendContainer;