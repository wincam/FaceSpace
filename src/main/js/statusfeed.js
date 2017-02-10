import React from 'react';
// import 'whatwg-fetch'

// Change this class so that it's more of a StatusFeed feed than a single status.

var Status = React.createClass({
    getInitialState () {
        return {
        }
    },
    render () {
        return (
            <div>
                <b>{this.props.name}</b>
                <br/>
                {this.props.status}
            </div>
        );
    }
});

export class StatusFeed extends React.Component {

    // This class could represent (up to) 10 statuses.
    // Later these will be sorted by date.
    // Stategy: call the REST API and get JSON.
    // TODO: modify controller class to take number of statuses as parameter.
    // For each element of JSON returned, create and render a Status component.

    constructor() {
        super();
        this.state = {statuses: []};
    }

    fetchFromAPI(name){
        fetch('http://localhost:8080/profileDisplay/getUserPosts?userName=' + name)
            .then(response => {
                if(response.ok) {
                    response.json().then(json => {
                        let results = [];
                        for (let i = 0; i < json.length; i++) {
                            results.push(<div><Status name={name} status={json[i].statusText}/><br/></div>);
                        }
                        this.setState({statuses: results});
                    });
                }
                else{
                    // If response is NOT OKAY (e.g. 404), clear the statuses.
                    this.setState({statuses: []});
                }
            });
    }

    componentDidMount() {
        let name = this.props.name;
        this.fetchFromAPI(name);
    }

    componentWillReceiveProps(nextProps){
        let name = nextProps.name;
        this.fetchFromAPI(name);
    }
    
    render() {
        return(
            <div>
                {this.state.statuses}
            </div>
        );
    }
}


