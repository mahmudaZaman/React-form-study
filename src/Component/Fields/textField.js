import React, { Component } from 'react';

class TextField extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive : false,
            isDirty : false,
            errorMessages : []
        }
    }
    handleChange = (e)=>{
        const isDirty = e.target.value !== this.props.initialValue;
        console.log(this.props.validators[0])
        const errorMessages = this.props.validators.map(v=>v(e.target.value)).filter(v=>v!==null);
        console.log(errorMessages);
        this.setState({
            ...this.state,
            isDirty,
            errorMessages
        })
    }
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input 
                onChange = {e => this.handleChange(e)}  
                onFocus = {e=>this.setState({...this.state,isActive: true})}
                onBlur = {e=>this.setState({...this.state,isActive: false})}
                type={this.props.type}></input>
            </div>
        );
    }
}

export default TextField;
