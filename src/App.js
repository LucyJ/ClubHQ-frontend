import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import Footer from './containers/Footer'
import Clubs from './containers/Clubs'
import SpecificClub from './containers/SpecificClub'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import Donate from './containers/Donate'
import { PrivateRoute } from './containers/Auth/ProtectedRoute'

const App = () => {
  const [tokenState, setTokenState] = useState(0)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <div className="App">
            <NavBar tokenState={tokenState} setTokenState={setTokenState} />
            <Switch>
              <PrivateRoute path="/Clubs/:id" component={SpecificClub} />
              <PrivateRoute path="/Browse" component={Clubs} />
              <Route path="/Login">
                <Login tokenState={tokenState} setTokenState={setTokenState} />
              </Route>
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Donate" component={Donate} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
