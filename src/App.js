import React, { Component } from 'react';
import './App.css';
import SelectLocation from './Component/SelectLocation/SelectLocation';
import PersonalDetails from './Component/PersonalDetails/PersonalDetails';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formValues : {}
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submited',this.state.formValues);
  }
  handleFormValueChange = (field,value)=> {
    console.log("handleFormValueChange",field,value);
    
    this.setState({
      formValues : {
        ...this.state.formValues,
        [field] : value
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SelectLocation values = {this.state.formValues} onChange = {this.handleFormValueChange}/>
        <PersonalDetails/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
