import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class SingleUserPage extends Component {
    state = {
        onePlayerGame: false,
        user: '',
        redirect: false
    }

    async componentWillMount () {
        await this.getUser()
    }

    getUser = async() => {
        const userId = this.props.match.params.userId
        const res = await axios.get(`/users/${userId}`)
        console.log(res.data)
        this.setState({ user: res.data })
    }

    deleteUser = async() => {
        const userId = this.props.match.params.userId
        const res = await axios.delete(`/users/${userId}`)
        this.setState({redirect: true})
    }

    toggleRedirectOnePlayerGame = () => {
        this.setState({ onePlayerGame: !this.state.redirect })
    }

    render() {
        if (this.state.onePlayerGame) {
            return <Redirect to='/oneplayergame' />
        }
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            
            <div>
                <h1>{this.state.user.name}'s User Page</h1>
                <button onClick={this.toggleRedirectOnePlayerGame}>New One Player Game </button>
                <div><button onClick={this.deleteUser}>Delete User</button></div>
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default SingleUserPage;