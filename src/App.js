/* eslint-disable react/jsx-pascal-case */
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
import Bgmi from "./compoent/Events/spot/Bgmi"
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
import Period_pain from "./compoent/Events/non-technical/Period_pain"
import Poetry_pros from "./compoent/Events/non-technical/Poetry_pros"
import Ramp_walk from "./compoent/Events/non-technical/Ramp_walk"
import Reels from "./compoent/Events/non-technical/Reels"
import Sound_Space from "./compoent/Events/non-technical/Sound_Space"
import Stand_up_comedy from "./compoent/Events/non-technical/Stand_up_comedy"
import ThugOfWar from "./compoent/Events/spot/ThugOfWar"
import Gully_circket from "./compoent/Events/spot/Gully_circket"
import Gallery from "./compoent/Gallery"
import Poster_presentation from "./compoent/Events/technical/Poster_presentation"
import Paper_persentation from "./compoent/Events/technical/Paper_persentation"
import Technical_quiz from "./compoent/Events/technical/Technical_quiz"
import Project_expo from "./compoent/Events/technical/Project_expo"
import FilpIt_PitchIt from "./compoent/Events/technical/FilpIt_PitchIt"
import Ff from "./compoent/Events/spot/Ff"
import Movie_quiz from "./compoent/Events/spot/Movie_quiz"


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
          <Route path='/poster' compoent={Poster_presentation} exact>
            <Poster_presentation/>
          </Route>
          <Route path='/Paper' compoent={Paper_persentation} exact>
            <Paper_persentation/>
          </Route>
          <Route path='/technical_quiz' compoent={Technical_quiz} exact>
            <Technical_quiz/>
          </Route>
          <Route path='/project' compoent={Project_expo} exact>
            <Project_expo/>
          </Route>
          <Route path='/flipIt' compoent={FilpIt_PitchIt} exact>
            <FilpIt_PitchIt/>
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
          <Route path='/sound_space' compoent={Sound_Space} exact>
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
          <Route path='/bgmi' compoent={Bgmi} exact>
            <Bgmi/>
          </Route>
          <Route path='/ff' compoent={Ff} exact>
            <Ff/>
          </Route>
          <Route path='/movieQuiz' compoent={Movie_quiz} exact>
            <Movie_quiz/>
          </Route>
          
         
          
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
