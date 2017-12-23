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
              this.setState({player2: true})
              this.setState({player1: false})
              break;
            }
          }
        } else if (this.state.player2 === true) {
          for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            if (this.state.gameBoard[i][index] === 0) {
              this.state.gameBoard[i][index] = 2;
              this.setState({player1: true})
              this.setState({player2: false})
              break;
            }
          }
        }
      };

    render() {
        return (
            <div>
                {this.state.gameBoard.map((array, index) => {
                    return <div index={index}>{array}</div>
                })}
                <button onClick={()=>this.playerMove(0)}>Column1</button>
                <button onClick={()=>this.playerMove(1)}>Column2</button>
                <button onClick={()=>this.playerMove(2)}>Column3</button>
                <button onClick={()=>this.playerMove(3)}>Column4</button>
                <button onClick={()=>this.playerMove(4)}>Column5</button>
                <button onClick={()=>this.playerMove(5)}>Column6</button>
                <button onClick={()=>this.playerMove(6)}>Column7</button>
            </div>
        );
    }
}

export default Game;