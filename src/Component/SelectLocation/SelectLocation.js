import React, { Component } from 'react';

class SelectLocation extends Component {
  render() {
    return (
        <div>
            <p>Please select a location</p>
            <SelectDivision/>
            <SelectDistrict/>
            <SelectPostOffice/>
        </div>
    );
  }
}
 
export default SelectLocation;
