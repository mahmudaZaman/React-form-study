import React, { Component } from 'react';
import SelectField from '../Fields/selectField';
import TextField from '../Fields/textField';
import maxLength from '../validators/maxLength'
import minLength from '../validators/minLength'
import startsWith from '../validators/startsWith'
/*[{
  divisionName : "Dhaka",
  districts : [{
    districtName : "Savar",
    postoffices : [{
      postOfficeName : "Hemayetpur",
      location : [22.39,27.10]
      contact : 01711927949
    }]
  }] 
}]
*/
// import SelectDivision from './SelectFields/SelectDivision';
// import SelectDistrict from './SelectFields/SelectDistrict';
// import SelectPostOffice from './SelectFields/SelectPostOffice';

const DIVISIONS = ["Dhaka", "Khulna", "Barishal", "Rajshahi"];
class SelectLocation extends Component {
  render() {
    // filter by this.props.values["division"] || DIVISIONS[0]
    const districts = ["Borguna", "Bhola", "Pirojpur", "Bandarban"];

    const postoffices = ["SAVAR", "HEMAYETPUR", "BANK TOWN"]
    console.log("SelectLocation", this.props);
    return (
      <div>
        <p>Please select a location</p>
        <SelectField
          name="division"
          label="Division"
          onChange={this.props.onChange}
          value={this.props.values["division"] || DIVISIONS[0]}
          options={DIVISIONS}
        >
        </SelectField>

        <SelectField
          name="district"
          label="District"
          onChange={this.props.onChange}
          value={this.props.values["district"] || districts[0]}
          options={districts}
        >
        </SelectField>

        <SelectField
          name="postoffice"
          label="Post Office"
          onChange={this.props.onChange}
          value={this.props.values["postoffice"] || postoffices[0]}
          options={postoffices}
        >
        </SelectField>

        <TextField
          name="test"
          label = "Name"
          validators = {[minLength(5),startsWith('A')]}
          >
        </TextField>

        {/* <SelectDivision />
        <SelectDistrict />
        <SelectPostOffice /> */}
      </div>
    );
  }
}

export default SelectLocation;
