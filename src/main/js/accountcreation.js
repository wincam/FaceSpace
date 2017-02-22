import React from 'react';

// Renders the form that accounts are created in
var AccountBox = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name : ""
        }
    },

    update(e){
        e.preventDefault();
        this.props.onUpdate(e.target.value);
    },

    submit(e){
        e.preventDefault();
        this.props.onCreate(e.target.value)


    },

    // Renders the
    render(){
        return(
            <form onSubmit={this.submit}>
                <label>
                    <input type="text" defaultValue={""} onChange={this.update}/>
                </label>
                <input type="submit" value="Create Account" />
            </form>
        );
    }


});

// output for account creation data
var AccountOutput = React.createClass({
    render(){
        return(
            <div>
                <p>Name: {this.props.accountName}</p>
                <p>Message: {this.props.status}</p>
            </div>
        );

    }


});

export class AccountCreation extends React.Component{

    constructor (props) {
        super(props);
        this.state = {accountName : "", status : "..."};
    }

    // updates when account name is changed
    updateName(name){
        this.setState({accountName : name, status: "..."})
    }

    // performs account creation
    createAccount(){
        fetch('http://localhost:8080/AccountCreation/createAccount?'
            + 'userName=' + this.state.accountName, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res =>{
            if(res.ok){
                this.setState({status: this.state.accountName + " created!"});
            }
            else{
                this.setState({status: this.state.accountName + " was already taken..."});
            }
        })

    }

    render(){
        return(
            <div>
                <AccountBox onCreate={this.createAccount.bind(this)} onUpdate={this.updateName.bind(this)} />
                <AccountOutput accountName={this.state.accountName} status={this.state.status}/>
            </div>

            );

    }
}