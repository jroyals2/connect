import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GameGrid = styled.div`
display: table;         
width: auto;                  
border: 2px solid #666666;   
font-size: 0px;      

`
const Container = styled.div`
padding: 10px;

`

const GameRows = styled.div`
display: table-row;
border: 2px solid #666666; 
width: auto;
clear: both;

`

const GameColumns = styled.div`
float: left; 
display: table-column; 
border: 2px solid #666666;         
width: 56px;       
height: 56px;  
text-align: center;
`


class OnePlayerGame extends Component {
    state = {
        gameBoard: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]],
        computerWins: false,
        player1: true,
        computerTurn: false
    }

    // These are all the win conditions
    winConditionColumn = () => {
        for (let i = this.state.gameBoard.length - 1; i > 2; i--) {
            for (let j = 0; j < 7; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i - 1][j] === 'one' && this.state.gameBoard[i - 2][j] === 'one' && this.state.gameBoard[i - 3][j] === 'one') {
                    console.log('player 1 wins column')
                    this.setState({ playerOneWin: true })
                    this.setState({ killGame: true })
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i - 1][j] === 'two' && this.state.gameBoard[i - 2][j] === 'two' && this.state.gameBoard[i - 3][j] === 'two') {
                    console.log('Computer wins column')
                    this.setState({ computerWins: true })
                    this.setState({ killGame: true })
                }
            }
        }
    }
    winConditionRow = () => {
        for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            for (let j = 0; j < 4; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i][j + 1] === 'one' && this.state.gameBoard[i][j + 2] === 'one' && this.state.gameBoard[i][j + 3] === 'one') {
                    console.log("player 1 wins rows")
                    this.setState({ playerOneWin: true })
                    this.setState({ killGame: true })
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i][j + 1] === 'two' && this.state.gameBoard[i][j + 2] === 'two' && this.state.gameBoard[i][j + 3] === 'two') {
                    console.log("Computer Wins wins rows")
                    this.setState({ computerWins: true })
                    this.setState({ killGame: true })
                }
            }
        }
    }
    winConditionDiagUp = () => {
        for (let i = this.state.gameBoard.length - 1; i > 3; i--) {
            for (let j = 0; j < 4; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i - 1][j + 1] === 'one' && this.state.gameBoard[i - 2][j + 2] === 'one' && this.state.gameBoard[i - 3][j + 3] === 'one') {
                    console.log('Player 1 wins Diag Up')
                    this.setState({ playerOneWin: true })
                    this.setState({ killGame: true })
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i - 1][j + 1] === 'two' && this.state.gameBoard[i - 2][j + 2] === 'two' && this.state.gameBoard[i - 3][j + 3] === 'two') {
                    console.log('Computer wins Diag Up')
                    this.setState({ computerWins: true })
                    this.setState({ killGame: true })
                }
            }
        }
    }
    winConditionDiagDown = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i + 1][j + 1] === 'one' && this.state.gameBoard[i + 2][j + 2] === 'one' && this.state.gameBoard[i + 3][j + 3] === 'one') {
                    console.log('Player 1 wins Diag Down')
                    this.setState({ playerOneWin: true })
                    this.setState({ killGame: true })
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i + 1][j + 1] === 'two' && this.state.gameBoard[i + 2][j + 2] === 'two' && this.state.gameBoard[i + 3][j + 3] === 'two') {
                    console.log('Computer wins Diag Down')
                    this.setState({ computerWins: true })
                    this.setState({ killGame: true })
                }
            }
        }
    }

    // AI for the computer to block you from a win
    computerCheckForBlockDiaDown = () => {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i + 1][j + 1] === 'one' && this.state.gameBoard[i + 2][j + 2] === 'one') {
                    console.log('Player 1 is close to victory diag down')
                }
            }
        }
    }

    computerCheckForBlockDiaUp = () => {
        for (let i = this.state.gameBoard.length - 1; i > 4; i--) {
            for (let j = 0; j < 5; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i - 1][j + 1] === 'one' && this.state.gameBoard[i - 2][j + 2] === 'one') {
                    console.log('Player 1 is close to victory Diag Up')
                }
            }
        }
    }
    computerCheckForBlockColumn = () => {
        for (let i = this.state.gameBoard.length - 1; i > 3; i--) {
            for (let j = 0; j < 7; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i - 1][j] === 'one' && this.state.gameBoard[i - 2][j] === 'one') {
                    console.log('player 1 close to win column')
                    let newGameBoard = this.state.gameBoard;
                    newGameBoard[0][0] = 'two'
                    this.setState({ gameBoard: newGameBoard })
                    this.setState({ player1: true })
                    this.setState({ computerTurn: false })
                    break;
                } else {
                    console.log("keep going")
                }
            }
        }
    }
    computerCheckForBlockRow = () => {
        for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            for (let j = 0; j < 5; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i][j + 1] === 'one' && this.state.gameBoard[i][j + 2] === 'one') {
                    console.log("player 1 close to win rows")

                }
            }
        }
    }




    computerMove = () => {
        this.computerCheckForBlockColumn()
        let index = Math.floor(Math.random() * 6)
        {
            for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
                if (this.state.gameBoard[i][index] === 0) {
                    let newGameBoard = this.state.gameBoard
                    newGameBoard[i][index] = 'two'
                    this.setState({ gameBoard: newGameBoard })
                    this.winConditionRow()
                    this.winConditionColumn()
                    this.winConditionDiagUp()
                    this.winConditionDiagDown()
                    this.setState({ player1: true })
                    this.setState({ computerTurn: false })
                    break;
                }
            }
        }
    }
    playerMove = (index) => {
        if (this.state.player1 === true) {
            for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
                if (this.state.gameBoard[i][index] === 0) {
                    let newGameBoard = this.state.gameBoard
                    newGameBoard[i][index] = 'one';
                    this.setState({ gameBoard: newGameBoard })
                    this.winConditionRow()
                    this.winConditionColumn()
                    this.winConditionDiagUp()
                    this.winConditionDiagDown()
                    this.setState({ computerTurn: true })
                    this.setState({ player1: false })
                    setTimeout(this.computerMove(), 2000)
                    break;
                }
            }
        }
    };



    render() {

        const gameSetup = <Container>
            <GameGrid>
                {this.state.gameBoard.map((array, index) => {
                    return <GameRows
                        key={index}>{array.map((each, index) => {
                            return <GameColumns key={index} className={each}>{each}</GameColumns>
                        })}</GameRows>
                })}
            </GameGrid>
            <div>
                {this.state.killGame ? "Game Over! Press New Game to start over!" :
                    <div>
                        <button onClick={() => this.playerMove(0)}>Column1</button>
                        <button onClick={() => this.playerMove(1)}>Column2</button>
                        <button onClick={() => this.playerMove(2)}>Column3</button>
                        <button onClick={() => this.playerMove(3)}>Column4</button>
                        <button onClick={() => this.playerMove(4)}>Column5</button>
                        <button onClick={() => this.playerMove(5)}>Column6</button>
                        <button onClick={() => this.playerMove(6)}>Column7</button>
                    </div>}
            </div>
        </Container>

        return (
            <div>
                {gameSetup}
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default OnePlayerGame;