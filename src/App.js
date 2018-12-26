import React, { Component } from 'react';
import './App.css';
import SelectLocation from './Component/SelectLocation/SelectLocation';
import PersonalDetails from './Component/PersonalDetails/PersonalDetails';

class App extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submited');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SelectLocation/>
        <PersonalDetails/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
