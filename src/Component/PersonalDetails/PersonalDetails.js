import React, { Component } from 'react';

class PersonalDetails extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      dob: '',
      number: '',
      email: '',
      checked: false,
      errorMessage: '',
      nameErrorMessage: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
    if(this.state.name.length >= 5){
      this.setState({
        nameErrorMessage: 'Name is lengthy'
      })
    }
    if(this.state.name.length < 5){
      this.setState({
        nameErrorMessage: ''
      })
    }
    console.log(this.state.name.length);
  }

  handleChangeCheck = (e) => {
    this.setState({
      checked: !this.state.checked
    })
  }
  
  handleTextRequired = (e) => {
    if(e.target.value === ""){
      this.setState({
        errorMessage: 'this field can not be empty!'
      })
    }
  }

  render () {
    const content = this.state.checked 
    ? <div> 
        <label>Name</label>
        <input type="text" name="name" onChange={this.handleChange} onBlur={this.handleTextRequired} /> <br/>
        <p className = "error-text">{this.state.errorMessage}</p>
        <p className = "error-text">{this.state.nameErrorMessage}</p>

        <label>DOB</label>
        <input type="date" name="dob" onChange={this.handleChange} onBlur={this.handleTextRequired} /> <br/>

        <label>Phone Number</label>
        <input type="number" name="number" onChange={this.handleChange} onBlur={this.handleTextRequired} /> <br/>
        
        <label>Email</label>
        <input type="email" name="email" onChange={this.handleChange} onBlur={this.handleTextRequired} />   
      </div>
      : null;

    return (
      <div>
        <p>Do you want to share personal details?</p>
         <div>
          <div>
            <label>Yes</label>
            <input 
              type="radio" 
              checked={ this.state.checked } 
              onChange={ this.handleChangeCheck } />

            <label>No</label>
            <input 
              type="radio" 
              checked={ !this.state.checked } 
              onChange={ this.handleChangeCheck } />
          </div>
          { content }
        </div>  
      </div>
    );
  }
}

export default PersonalDetails;
