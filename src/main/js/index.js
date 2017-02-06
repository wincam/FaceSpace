/**
 * Created by ethan on 04/02/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { StatusSearch } from './statussearch';
import { StatusUpdate } from './statusupdate';

ReactDOM.render(
    <div>
        <StatusSearch/>
    </div>, document.getElementById('statusFeed'));


ReactDOM.render(
    <div>
        <StatusUpdate/>
    </div>, document.getElementById('statusUpdate')
);

