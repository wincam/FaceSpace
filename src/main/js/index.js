/**
 * Created by ethan on 04/02/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Status } from './status.js';

//Call to render our component into the DOM…
ReactDOM.render(
    <div>

        <Status name="Ethan"/>
            <br/>
        <Status name="Simon"/>
            <br/>
        <Status name="Kate"/>
            <br/>
        <Status name="Marceline"/>
            <br/>

    </div>, document.getElementById('profileDisplay')); // ...into this element on the page