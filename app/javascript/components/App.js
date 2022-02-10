import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'
import Header from './components/Header'
import mockApts from './mockApts.js'
import AptIndex from './pages/AptIndex'
import AptShow from './pages/AptShow'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apts: mockApts
    }
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    
    
    return(
    
      <Router>
      <Header {...this.props}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aptindex" render={(props) => <AptIndex apts={this.state.apts} />} />
        <Route path="/aptshow/:user_id" render={(props) => {
          let user_id = props.match.params.user_id
          let apt = this.state.apts.find(apt => apt.user_id === +user_id)
          return <AptShow apt={apt} />
        }} />
        <Route path="/about" component={AboutUs} />
        <Route path="/learn" component={LearnMore} />
      </Switch>
      </Router>
    )
  }
}

export default App
