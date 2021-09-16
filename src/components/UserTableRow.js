import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default class UserTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    //history = useHistory();
    //handleOnClick = () => history.push("/edit-user/"+this.props.obj._id);

    deleteUser() {
        axios.delete('http://localhost:4000/users/delete-user/' + this.props.obj._id)
            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.dob}</td>
                <td>{this.props.obj.nationality}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.IDno}</td>
                <td>
                    <button><Link to={"/edit-user/" + this.props.obj._id}> Edit </Link></button>
                    {/* <button onClick={() => history.push("/edit-user/"+this.props.obj._id)}>Edit</button> */}
                    <button onClick={this.deleteUser}>Delete</button>
                </td>
            </tr>
        );
    }
}