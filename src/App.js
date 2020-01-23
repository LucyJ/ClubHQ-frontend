import React from 'react'
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

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/Clubs/:id" component={SpecificClub} />
            <Route path="/Browse" component={Clubs} />
            <Route path="/TopClubs" component={Clubs} />
            <Route path="/Login" component={Login} />
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

export default App
