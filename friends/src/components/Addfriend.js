import React, {Component} from "react";
import axoisWithAuth from "../utils/axiosWithAuth";
import {Form} from "react-bootstrap";

class Addfriend extends Component {
    state={
        Addfriend:{
            id:Date.now(),
            name: "",
            age:undefined,
            email: ""
        } //addfriend
    }//state

    handleSubmit = e => {
        e.prevent.Default()
        this.props.setUpdate(true)
        axoisWithAuth()
            .post("/friends", this.state.Addfriend)
            .then(res => {
                console.log("addFriend response", res)
            }) 
            .catch(err => {
                console.log(err)
            })
    } //Adding

    handleChange = e => {
        this.setState({
            Addfriend: {
                ...this.state.Addfriend,
                [e.target.name]: e.target.value

            }
        })
    };// handleChange

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h2>Add a New Friend</h2>
                <input 
                name="name"
                value={this.state.Addfriend.name}
                placeholder="Name"
                onChange={this.handleChange}
                />
                <input 
                name="age"
                value={this.state.Addfriend.age}
                placeholder="Age"
                onChange={this.handleChange}
                />
                <input 
                name="email"
                value={this.state.Addfriend.email}
                placeholder="Email"
                onChange={this.handleChange}
                />
                <button type="submit" value="submit">Submit</button>
            </Form>
        )
    }

}//end

export default Addfriend;