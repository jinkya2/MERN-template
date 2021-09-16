import React, { Component } from "react";
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserGender = this.onChangeUserGender.bind(this);
    this.onChangeUserDOB = this.onChangeUserDOB.bind(this);
    this.onChangeUserNationality = this.onChangeUserNationality.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserIDno = this.onChangeUserIDno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      gender: '',
      dob: '',
      nationality: '',
      email: '',
      IDno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/edit-user/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          gender: res.data.gender,
          dob: res.data.dob,
          nationality: res.data.nationality,
          email: res.data.email,
          IDno: res.data.IDno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserName(e) {this.setState({ name: e.target.value })}
  onChangeUserGender(e) { this.setState({ gender: e.target.value }) }
  onChangeUserDOB(e) { this.setState({ dob: e.target.value }) }
  onChangeUserNationality(e) { this.setState({ nationality: e.target.value }) }
  onChangeUserEmail(e) {this.setState({ email: e.target.value })}
  onChangeUserIDno(e) {this.setState({ IDno: e.target.value })}

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

    axios.put('http://localhost:4000/users/update-user/' + this.props.match.params.id, userObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/user-list')
  }


  render() {
    return (
        <>
  <form id="form" onSubmit={this.onSubmit}>
      <fieldset name="userFields">
        <legend>User Info</legend>
        <p>Name: <input type="text" value={this.state.name} onChange={this.onChangeUserName} /></p>
        <p>Gender: <input type="text" value={this.state.gender} onChange={this.onChangeUserGender} /></p>
        <p>DOB: <input type="date" value={this.state.dob} onChange={this.onChangeUserDOB} /></p>
        <p>Nationality: <input type="text" value={this.state.nationality} onChange={this.onChangeUserNationality} /></p>
        <p>Email: <input type="email" value={this.state.email} onChange={this.onChangeUserEmail} /></p>
        <p>ID No: <input type="text" value={this.state.IDno} onChange={this.onChangeUserIDno} /></p>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>      
        </>
    );
  }
}