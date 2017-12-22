import React, { Component } from 'react';

class Game extends Component {

    state = {
        gameBoard: [[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]]
    }

    
    render() {
        return (
            <div>
                {this.state.gameBoard}
            </div>
        );
    }
}

export default Game;