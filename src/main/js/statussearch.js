/**
 * Created by ethan on 2017-02-05.
 */
import React from 'react';
import {StatusFeed} from './statusfeed'

var TextBox = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name : ""
        }
    },

    // Event handler for text change
    handleChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ name : e.target.value });
    },

    // Event handler for button clicked / enter typed
    handleSubmit(e) {
        // Prevents reinitialization
        e.preventDefault();
        this.props.callback(this.state.name);
    },

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" defaultValue={this.state.name} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Get Statuses!" />
            </form>
        );
    }
});

var StatusSearchComponent = React.createClass({
    getInitialState: function () {
        return {
            name : ''
        }
    },
    // Callback function used by TextBox to update this component's state
    setNameState(n){
        this.setState({ name: n });
    },
    // All components must have a render function.
    render(){
        return(
            <div>
                Enter a FaceSpace user's name here:<br/>
                <TextBox callback={this.setNameState}/>
                <br/>
                <StatusFeed name={this.state.name}/>
            </div>
        );
    }
});

export class StatusSearch extends React.Component{
    render(){
        return(<StatusSearchComponent/>);
    }
}
