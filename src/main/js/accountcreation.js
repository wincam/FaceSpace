/**
 * Created by ethan on 2017-02-06.
 */

import React from 'react';

var AccountCreationComponent = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name : "",
            success : ""
        }
    },

    handleNameChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ name : e.target.value , success : "..."});
    },

    handleSubmit(e) {
        // Prevents reinitialization
        e.preventDefault();
        let name = this.state.name;
        fetch('http://localhost:8080/accountCreation/createAccount?'
            + 'userName=' + name, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res =>{
            if(res.ok){
                this.setState({success: 'Account: ' + name + ' created!'});
            }
            else{
                this.setState({success: 'Account: ' + name + ' was already taken...'});
            }
        })
    },

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" defaultValue={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <input type="submit" value="Create Account!" />
                </form>
                Name: {this.state.name}
                <br/>
                Message: {this.state.success}
            </div>
        );
    }
});

export class AccountCreation extends React.Component{
    render(){
        return(
            <div>
                <AccountCreationComponent/>
            </div>
        );
    }
}