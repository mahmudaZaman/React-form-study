import React, { Component } from 'react';

const options = ["Dhaka", "Khulna", "Barishal", "Rajshahi"];
class SelectDistrict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : "Please Select District"
    }
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label>Select District</label>
        <select value={this.state.value} onChange={this.onChange}>
          {options.map(option => {
            return <option value={option} key={option}>{option}</option>
          })}
        </select>
      </div>
    );
  }
}

export default SelectDistrict;
