import React from 'react';
import 'whatwg-fetch'

export class Status extends React.Component {
    constructor() {
        super();
        this.state = { status: ''};
    }

    componentDidMount() {
        let name = this.props.name;
        fetch('http://localhost:8080/profileDisplay/getUserPosts?userName=' + name)
            .then(response => {
                response.json().then(json => {
                    this.setState({status:json[0].statusText});
                });
            });
    }

    render() {
        return(
            <div>{this.props.name}<br/>{this.state.status}</div>
        );
    }
}