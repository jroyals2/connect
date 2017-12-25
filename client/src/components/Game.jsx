import React, { Component } from 'react';

class Game extends Component {

    state = {
        gameBoard: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]],
        player1: true,
        player2: false

    }
    winConditionColumn = () => {
        for(let i = this.state.gameBoard.length - 1; i > 3; i--) {
            for (let j = 0; j < 6; j++){
                if (this.state.gameBoard[i][j] === 1 && this.state.gameBoard[i-1][j] === 1 && this.state.gameBoard[i-2][j] === 1 && this.state.gameBoard[i-3][j] === 1){
                    console.log('player 1 wins column')
                } else if (this.state.gameBoard[i][j] === 2 && this.state.gameBoard[i-1][j] === 2 && this.state.gameBoard[i-2][j] === 2 && this.state.gameBoard[i-3][j] === 2){
                    console.log('player 2 wins column')
                } 
            }
        }
    }
    winConditionRow = () => {
        for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            for (let j = 0; j < 3; j++) {
                if (this.state.gameBoard[i][j] === 1 && this.state.gameBoard[i][j + 1] === 1 && this.state.gameBoard[i][j + 2] === 1 && this.state.gameBoard[i][j + 3] === 1) {
                    console.log("player 1 wins rows")
                } else if (this.state.gameBoard[i][j] === 2 && this.state.gameBoard[i][j + 1] === 2 && this.state.gameBoard[i][j + 2] === 2 && this.state.gameBoard[i][j + 3] === 2) {
                    console.log("player 2 wins rows")
                }
            }
        }
    }
    winConditionDiagUp = () => {
        for (let i = this.state.gameBoard.length - 1; i > 3; i--) {
            for (let j = 0; j < 3; j++) {
                if (this.state.gameBoard[i][j] === 1 && this.state.gameBoard[i - 1][j + 1] === 1 && this.state.gameBoard[i - 2][j + 2] === 1 && this.state.gameBoard[i - 3][j + 3] === 1) {
                    console.log('Player 1 wins Diag Up')
                } else if (this.state.gameBoard[i][j] === 2 && this.state.gameBoard[i - 1][j + 1] === 2 && this.state.gameBoard[i - 2][j + 2] === 2 && this.state.gameBoard[i - 3][j + 3] === 2) {
                    console.log('Player 2 wins Diag Up')
                }
            }
        }
    }
    winConditionDiagDown = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.state.gameBoard[i][j] === 1 && this.state.gameBoard[i + 1][j + 1] === 1 && this.state.gameBoard[i + 2][j + 2] === 1 && this.state.gameBoard[i + 3][j + 3] === 1) {
                    console.log('Player 1 wins Diag Down')
                } else if (this.state.gameBoard[i][j] === 2 && this.state.gameBoard[i + 1][j + 1] === 2 && this.state.gameBoard[i + 2][j + 2] === 2 && this.state.gameBoard[i + 3][j + 3] === 2) {
                    console.log('Player 2 wins Diag Down')
                }
            }
        }
    }

    playerMove = (index) => {
        if (this.state.player1 === true) {
            for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
                if (this.state.gameBoard[i][index] === 0) {
                    let newGameBoard = this.state.gameBoard
                    newGameBoard[i][index] = 1;
                    this.setState({gameBoard: newGameBoard})
                    this.winConditionRow()
                    this.winConditionColumn()
                    this.winConditionDiagUp()
                    this.winConditionDiagDown()
                    this.setState({ player2: true })
                    this.setState({ player1: false })
                    break;
                }
            }
        } else if (this.state.player2 === true) {
            for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
                if (this.state.gameBoard[i][index] === 0) {
                    let newGameBoard = this.state.gameBoard
                    newGameBoard[i][index] = 2;
                    this.setState({gameBoard: newGameBoard})
                    this.winConditionRow()
                    this.winConditionColumn()
                    this.winConditionDiagUp()
                    this.winConditionDiagDown()
                    this.setState({ player1: true })
                    this.setState({ player2: false })
                    break;
                }
            }
        }
    };

    boardReset = () => {
        this.setState({
            gameBoard: [[0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]]
        })
        this.setState({ player1: true })
        this.setState({ player2: false })
    }
 

    render() {
        return (
            <div>
                {this.state.gameBoard.map((array, index) => {
                    return <div index={index}>{array}</div>
                })}
                <div>
                    <button onClick={() => this.playerMove(0)}>Column1</button>
                    <button onClick={() => this.playerMove(1)}>Column2</button>
                    <button onClick={() => this.playerMove(2)}>Column3</button>
                    <button onClick={() => this.playerMove(3)}>Column4</button>
                    <button onClick={() => this.playerMove(4)}>Column5</button>
                    <button onClick={() => this.playerMove(5)}>Column6</button>
                    <button onClick={() => this.playerMove(6)}>Column7</button>
                </div>
                <div><button onClick={this.boardReset}>New Game</button></div>
            </div>
        );
    }
}

export default Game;