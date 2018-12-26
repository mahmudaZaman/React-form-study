import React, { Component } from 'react';
import SelectDivision from './SelectFields/SelectDivision';
import SelectDistrict from './SelectFields/SelectDistrict';
import SelectPostOffice from './SelectFields/SelectPostOffice';


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
