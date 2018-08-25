import React, { Component } from "react";
import Password from "./Password";

class Bin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            password:""
        }
        this.passwordCheck = this.passwordCheck.bind(this);
        this.handleGet = this.handleGet.bind(this);
    }
    passwordCheck() {
        fetch('http://localhost:3000/bin/:name')
        .then((res =>{
            res.json()
        } ))
        .then(res => {
            this.setState({ password: res})
        })
        .catch(err => console.log('Error grabbing bins ', err))
    }
    handleGet(e){
        this.setState({password: e.target.value})
    }
    
    render () {
       return (
            <div>
                <Password passwordCheck={this.passwordCheck} password={this.handleGet}/>
            </div>
        )
    }
}
export default Bin;