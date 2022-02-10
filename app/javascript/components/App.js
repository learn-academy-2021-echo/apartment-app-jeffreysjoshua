import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in", logged_in)
    return(
    
      <>
      <h1>Hola Mundo!</h1>
      <br /> 
      <br /> 
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      </>
    )
  }
}

export default App
