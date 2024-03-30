import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"



import Contact from "./compoent/Contact"

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
import Non_technical from "./compoent/Events/Non_technical"
import Spot from "./compoent/Events/Spot"
import Colour_paint from "./compoent/Events/non-technical/Colour_paint"
import Dialogue_war from "./compoent/Events/non-technical/Dialogue_war"
import Dillse_Dance from "./compoent/Events/non-technical/Dillse_Dance"
import Dumb_charades from "./compoent/Events/non-technical/Dumb_charades"
import Face_paint from "./compoent/Events/non-technical/Face_paint"
import Gana from "./compoent/Events/non-technical/Gana"
import Mehandi from "./compoent/Events/non-technical/Mehandi"
import Meme_challenge from "./compoent/Events/non-technical/Meme_challenge"
import Pencil_sketch from "./compoent/Events/non-technical/Pencil_sketch"
import Period_pain from "./compoent/Events/non-technical/Period_pain"
import Poetry_pros from "./compoent/Events/non-technical/Poetry_pros"
import Ramp_walk from "./compoent/Events/non-technical/Ramp_walk"
import Reels from "./compoent/Events/non-technical/Reels"
import Short_film from "./compoent/Events/non-technical/Short_film"
import Sound_Space from "./compoent/Events/non-technical/Sound_Space"
import Stand_up_comedy from "./compoent/Events/non-technical/Stand_up_comedy"
import ThugOfWar from "./compoent/Events/spot/ThugOfWar"
import Gully_circket from "./compoent/Events/spot/Gully_circket"
import Gallery from "./compoent/Gallery"


//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router scrollRestoration="auto">
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/gallery' compoent={Gallery} exact>
            <Gallery />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/events' compoent={Events} exact>
            <Events />
          </Route>
          <Route path='/spot' compoent={Spot} exact>
            <Spot/>
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


          <Route path='/non_technical' compoent={Non_technical} exact>
            <Non_technical/>
          </Route>
          <Route path='/colour-paint' compoent={Colour_paint} exact>
            <Colour_paint/>
          </Route>
          <Route path='/dialogue-war' compoent={Dialogue_war} exact>
            <Dialogue_war/>
          </Route>
          <Route path='/dillse-dance' compoent={Dillse_Dance} exact>
            <Dillse_Dance/>
          </Route>
          <Route path='/dumb-charades' compoent={Dumb_charades} exact>
            <Dumb_charades/>
          </Route>
          <Route path='/face-paint' compoent={Face_paint} exact>
            <Face_paint/>
          </Route>
          <Route path='/gana' compoent={Gana} exact>
            <Gana/>
          </Route>
          <Route path='/mehandi' compoent={Mehandi} exact>
            <Mehandi/>
          </Route>
          <Route path='/Meme-challenge' compoent={Meme_challenge} exact>
            <Meme_challenge/>
          </Route>
          <Route path='/pencil-sketch' compoent={Pencil_sketch} exact>
            <Pencil_sketch/>
          </Route>
          <Route path='/period-pain' compoent={Period_pain} exact>
            <Period_pain/>
          </Route>
          <Route path='/poetry-pros' compoent={Poetry_pros} exact>
            <Poetry_pros/>
          </Route>
          <Route path='/ramp-walk' compoent={Ramp_walk} exact>
            <Ramp_walk/>
          </Route>
          <Route path='/reels' compoent={Reels} exact>
            <Reels/>
          </Route>
          <Route path='/short-film' compoent={Short_film} exact>
            <Short_film/>
          </Route>
          <Route path='/sound-space' compoent={Sound_Space} exact>
            <Sound_Space/>
          </Route>
          <Route path='/stand-up-comedy' compoent={Stand_up_comedy} exact>
            <Stand_up_comedy/>
          </Route>
          <Route path='/tug_of_war' compoent={ThugOfWar} exact>
            <ThugOfWar/>
          </Route>
          <Route path='/gully_cricket' compoent={Gully_circket} exact>
            <Gully_circket/>
          </Route>
         
          
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
