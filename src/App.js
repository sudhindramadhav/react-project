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
import Build_With_bits from "./compoent/Events/technical/Build_With_bits"
import Circut_trace from "./compoent/Events/technical/Circut_trace"
import Coding_automata from "./compoent/Events/technical/Coding_automata"
import Coding_contest from "./compoent/Events/technical/Coding_contest"
import Kahoot_quiz from "./compoent/Events/technical/Kahoot_quiz"
import Robo_Talk from "./compoent/Events/technical/Robo_Talk"


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
          <Route path='/bwb' compoent={Build_With_bits} exact>
            <Build_With_bits/>
          </Route>
          <Route path='/circut_trace' compoent={Circut_trace} exact>
            <Circut_trace/>
          </Route>
          <Route path='/coding_automata' compoent={Coding_automata} exact>
            <Coding_automata/>
          </Route>
          <Route path='/coding_contest' compoent={Coding_contest} exact>
            <Coding_contest/>
          </Route>
          <Route path='/kahoot_quiz' compoent={Kahoot_quiz} exact>
            <Kahoot_quiz/>
          </Route>
          <Route path='/robo_talk' compoent={Robo_Talk} exact>
            <Robo_Talk/>
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
