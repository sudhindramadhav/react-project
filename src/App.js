import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"

import Contact from "./compoent/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sponsers from "./compoent/Sponsers"
import Footer from "./compoent/Footer"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/sponsers' compoent={Sponsers} exact>
            <Sponsers/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
