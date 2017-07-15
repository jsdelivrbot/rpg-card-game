import React, { Component } from 'react';
import { harmonyConnect } from '../../base/features/harmony-redux-react-connect';
import Game from '../../../game';

class Portal extends Component {

    render () {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

export default harmonyConnect(Portal,
    (state) => {
        return {

        }
    },
    {

    }
);