import React, { Component } from "react";
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserGender = this.onChangeUserGender.bind(this);
    this.onChangeUserDOB = this.onChangeUserDOB.bind(this);
    this.onChangeUserNationality = this.onChangeUserNationality.bind(this);
    this.onChangeUserIDno = this.onChangeUserIDno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      gender: '',
      dob: '',
      nationality: '',
      email: '',
      IDno: ''
    }
  }

  onChangeUserName(e) { this.setState({ name: e.target.value }) }
  onChangeUserGender(e) { this.setState({ gender: e.target.value }) }
  onChangeUserDOB(e) { this.setState({ dob: e.target.value }) }
  onChangeUserNationality(e) { this.setState({ nationality: e.target.value }) }

  onChangeUserEmail(e) { this.setState({ email: e.target.value }) }

  onChangeUserIDno(e) { this.setState({ IDno: e.target.value }) }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      gender: this.state.gender,
      dob: this.state.dob,
      nationality: this.state.nationality,
      email: this.state.email,
      IDno: this.state.IDno
    };

    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      gender: '',
      dob: '',
      nationality: '',
      email: '',
      IDno: ''
    });
  }

  render() {
    return(
      <form id="form" onSubmit={this.onSubmit}>
      <fieldset name="userFields">
        <legend>User Info</legend>
        <p>Name: <input type="text" value={this.state.name} onChange={this.onChangeUserName} /></p>
        <p>Gender: <input type="text" value={this.state.gender} onChange={this.onChangeUserGender} /></p>
        <p>DOB: <input type="date" value={this.state.dob} onChange={this.onChangeUserDOB} /></p>
        <p>Nationality: <input type="text" value={this.state.nationality} onChange={this.onChangeUserNationality} /></p>
        <p>Email: <input type="email" value={this.state.email} onChange={this.onChangeUserEmail} /></p>
        <p>ID No: <input type="text" value={this.state.IDno} onChange={this.onChangeUserIDno} /></p>
        <input type="submit" value="Create User" />
      </fieldset>
    </form>
    )
}
}