import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"



import Contact from "./compoent/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sponsers from "./compoent/Sponsers"
import Footer from "./compoent/Footer"
import Events from "./compoent/Events/Events"
import Idea_Blitz from "./compoent/Events/technical/Idea_Blitz"

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
          <Route path='/events' compoent={Events} exact>
            <Events />
          </Route>
          <Route path='/sponsers' compoent={Sponsers} exact>
            <Sponsers/>
          </Route>
          <Route path='/idea_blitz' compoent={Idea_Blitz} exact>
            <Idea_Blitz/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
