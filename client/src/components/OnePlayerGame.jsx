import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class OnePlayerGame extends Component {
    render() {
        return (
            <div>
                Is this working?
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default OnePlayerGame;