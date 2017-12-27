import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
        player2: false,
        playerOneWin: false,
        playerTwoWin: false,
        killGame: false,
        playerOneName: 'player one',
        playerTwoName: 'player two',
        filledOut: false

    }
    toggleFilledOut = (event) => {
        event.preventDefault()
        this.setState({filledOut: !this.state.filledOut})
    }
    handleChangeOne = (event) => {
        const playerOneName = event.target.value
        this.setState({playerOneName})
    }
    handleChangeTwo = (event) => {
        const playerTwoName = event.target.value
        this.setState({playerTwoName})
    }

    winConditionColumn = () => {
        for(let i = this.state.gameBoard.length - 1; i > 3; i--) {
            for (let j = 0; j < 6; j++){
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i-1][j] === 'one' && this.state.gameBoard[i-2][j] === 'one' && this.state.gameBoard[i-3][j] === 'one'){
                    console.log('player 1 wins column')
                    this.setState({playerOneWin: true})
                    this.setState({killGame: true})
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i-1][j] === 'two' && this.state.gameBoard[i-2][j] === 'two' && this.state.gameBoard[i-3][j] === 'two'){
                    console.log('player 2 wins column')
                    this.setState({playerTwoWin: true})
                    this.setState({killGame: true})
                } 
            }
        }
    }
    winConditionRow = () => {
        for (let i = this.state.gameBoard.length - 1; i >= 0; i--) {
            for (let j = 0; j < 4; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i][j + 1] === 'one' && this.state.gameBoard[i][j + 2] === 'one' && this.state.gameBoard[i][j + 3] === 'one') {
                    console.log("player 1 wins rows")
                    this.setState({playerOneWin: true})
                    this.setState({killGame: true})
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i][j + 1] === 'two' && this.state.gameBoard[i][j + 2] === 'two' && this.state.gameBoard[i][j + 3] === 'two') {
                    console.log("player 2 wins rows")
                    this.setState({playerTwoWin: true})
                    this.setState({killGame: true})
                }
            }
        }
    }
    winConditionDiagUp = () => {
        for (let i = this.state.gameBoard.length - 1; i > 3; i--) {
            for (let j = 0; j < 4; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i - 1][j + 1] === 'one' && this.state.gameBoard[i - 2][j + 2] === 'one' && this.state.gameBoard[i - 3][j + 3] === 'one') {
                    console.log('Player 1 wins Diag Up')
                    this.setState({playerOneWin: true})
                    this.setState({killGame: true})
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i - 1][j + 1] === 'two' && this.state.gameBoard[i - 2][j + 2] === 'two' && this.state.gameBoard[i - 3][j + 3] === 'two') {
                    console.log('Player 2 wins Diag Up')
                    this.setState({playerTwoWin: true})
                    this.setState({killGame: true})
                }
            }
        }
    }
    winConditionDiagDown = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.state.gameBoard[i][j] === 'one' && this.state.gameBoard[i + 1][j + 1] === 'one' && this.state.gameBoard[i + 2][j + 2] === 'one' && this.state.gameBoard[i + 3][j + 3] === 'one') {
                    console.log('Player 1 wins Diag Down')
                    this.setState({playerOneWin: true})
                    this.setState({killGame: true})
                } else if (this.state.gameBoard[i][j] === 'two' && this.state.gameBoard[i + 1][j + 1] === 'two' && this.state.gameBoard[i + 2][j + 2] === 'two' && this.state.gameBoard[i + 3][j + 3] === 'two') {
                    console.log('Player 2 wins Diag Down')
                    this.setState({playerTwoWin: true})
                    this.setState({killGame: true})
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
                    newGameBoard[i][index] = 'two';
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
        this.setState({playerOneWin: false})
        this.setState({playerTwoWin: false})
        this.setState({killGame: false})
        this.setState({filledOut: false})
    }
 

    render() {
    const gameSetup =  <Container>
    <GameGrid>
    {this.state.gameBoard.map((array, index) => {
        return <GameRows
         key={index}>{array.map((each, index)=>{
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
    <div><button onClick={this.boardReset}>New Game</button>
        {this.state.player1 ? <div>{this.state.playerOneName}'s turn (Black Token) </div> : ''}
        {this.state.player2 ? <div>{this.state.playerTwoName}'s turn (Red Token) </div> : ''}
        {this.state.playerOneWin ? <div>{this.state.playerOneName} wins!</div> : ''}
        {this.state.playerTwoWin ? <div>{this.state.playerTwoName} wins!</div> : ''}
        <Link to="/">Home</Link>
    </div>
</Container>
        const setup = <div>
            <form>
                <div>
                    <label htmlFor="playerOneName">Player One Name: </label>
                    <input type="text" name="playerOneName" onChange={this.handleChangeOne} value={this.state.playerOneName} placeholder="player one name" />
                </div>
                <div>
                    <label htmlFor="playerTwoName">Player Two Name: </label>
                    <input type="text" name="playerTwoName" onChange={this.handleChangeTwo} value={this.state.playerTwoName} placeholder="player two name" />
                </div>
                <div><button onClick={this.toggleFilledOut}>Begin</button></div>
                <Link to="/">Home</Link>
            </form>
        </div>

        return (
            <div>
            { this.state.filledOut ? gameSetup : setup }
            </div>
        );
    }
}

export default Game;