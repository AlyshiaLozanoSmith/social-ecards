import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import CardEditor from './components/CardEditor'
import Profile from './components/Profile'
import Home from './components/Home'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: window.localStorage.getItem('login_username') || ''
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Header token={this.state.token} setToken={token => this.setState({ token: token })} username={this.state.username} />
        </div>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add-card'><CardEditor token={this.state.token} username={this.state.username} /></Route>
            <Route path='/profile'> <Profile token={this.state.token} username={this.state.username} /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
