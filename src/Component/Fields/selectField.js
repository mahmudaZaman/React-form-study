import React, { Component } from 'react';

class SelectField extends Component {    
      render() {
        return (
          <div>
            <label>Select {this.props.label}</label>
            <select value={this.props.value}  onChange={(e)=>this.props.onChange(this.props.name, e.target.value)}>
              {this.props.options.map(option => {
                return <option value={option} key={option}>{option}</option>
              })}
            </select>
          </div>
        );
      }
}

export default SelectField;
