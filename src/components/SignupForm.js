import React, { Component } from "react";
// import { render } from "react-dom";
import { Button } from 'react-bootstrap';

const ROOT_URL = "httpswq://rmuse.live/api/1/user";

// const payload = Signup(username, email, password);


class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
        };
    }
    handleInputonChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    handleOnSubmit = event => {
        fetch(ROOT_URL, { method: 'POST',
        headers: {
            'Appept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
    })
        .then(results => {
            return results.json();
        }).then(data =>{})
   event.preventDefault();
//    this.props.onSubmit(this.state.FirstName,this.state.LastName,this.state.password);
    };

render() {
    const { firstname, lastname, email, username, password } = this.state;
    return(
<div>
    <form onSubmit={this.handleOnSubmit}>
        <div className="form-group">
            <label for="FirstName">First Name</label>
            <input type="FirstName" className="form-control" id="FirstName" placeholder="FirstName"/>
            <input type="LastName" className="form-control" id="LastName" placeholder="LastName"/>
            <input type="Email" className="form-control" id="Email" placeholder="Email"/>
            <input type="UserName" className="form-control" id="UserName" placeholder="UserName"/>
            <input type="Password" className="form-control" id="Password" placeholder="Password"/>
            {/* <input type="LastName" className="form-control" id="LastName" placeholder="LastName"/> */}
            
  </div>
   </form>
   <div>
       <br/>
       <div
       type="Username"
       type="password"
       floatingLabelText="Password"
       onChange = {(event, newValue) => this.setState({Username:newValue})}
    
       />
       <br/>
       <Button label="Submit" primary={true} onClick={(event) =>
           this.handleClick(event)}> Submit</Button>
           </div>
           </div>
    );
    }
    }
    export default SignupForm;
