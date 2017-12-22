import React, { Component } from 'react';

class Game extends Component {

    state = {
        gameBoard: [[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]],
        player1: true,
        player2: false

    }

    playerMove = (index) => {
        if (this.state.player1 === true) {
          for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            if (this.state.gameBoard[i][index] === 0) {
              this.state.gameBoard[i][index] = 1;
              this.state.player2 = true;
              this.state.player1 = false;
              break;
            }
          }
        } else if (this.state.player2 === true) {
          for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            if (this.state.gameBoard[i][index] === 0) {
              this.state.gameBoard[i][index] = 2;
              this.state.player2 = false;
              this.state.player1 = true;
              break;
            }
          }
        }
      };
    render() {
        return (
            <div>
                {this.state.gameBoard}
            </div>
        );
    }
}

export default Game;