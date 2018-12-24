import React, { Component } from 'react';
import './App.css';
import SelectLocation from './Component/SelectLocation/SelectLocation';
import PersonalDetails from './Component/PersonalDetails/PersonalDetails';

class App extends Component {
  render() {
    return (
      <div>
        <SelectLocation/>
        <PersonalDetails/>
      </div>
    );
  }
}

export default App;
