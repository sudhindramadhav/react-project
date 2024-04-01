import React from "react"
import { Link } from "react-router-dom"
import "./homes.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled, { keyframes, css } from "styled-components"

import examplev from "../Assets/video/example.mp4"

import build_with_bits from "../Assets/images/build_with_bits.jpg"
import coding_automata from "../Assets/images/coding_automata.jpg"
import coding_contest from "../Assets/images/codingcontest.jpg"
import idea_blitz from "../Assets/images/idea_blitz.jpeg"
import kahoot_quiz from "../Assets/images/kahoot_quiz.png"
import robo_talk from "../Assets/images/robotalk.jpg"
import paper from "../Assets/images/paper.jpeg"
import poster from "../Assets/images/poster.png"
import quiz from "../Assets/images/quiz.jpg"


import color_paint from "../Assets/images/color_paint.jpg"
import dialoguewar from "../Assets/images/dialoguewar.jpg"
import dillse from "../Assets/images/classicaldance.jpg"
import dumbcharades from "../Assets/images/dumbcharades.jpg"
import face_paint from "../Assets/images/face_paint.jpg"
import gana from "../Assets/images/singing.jpg"

import poetry from "../Assets/images/poetry.jpg"
import rampwalk from "../Assets/images/rampwalk.jpg"
import reels from "../Assets/images/reels.jpg"

import sound_space from "../Assets/images/musicalinstrument.jpg"
import standupcomedy from "../Assets/images/standupcomedy.jpg"
import flipIt from "../Assets/images/flipIt.jpeg"


import gully_cricket from "../Assets/images/gully_cricket.jpg"
import tug_of_war from "../Assets/images/tug_of_war.jpg"
import bgmi from "../Assets/images/bgmi.jpeg"
import ff from "../Assets/images/FreeFire.jpg"
import movieQuiz from "../Assets/images/movieQuiz.jpeg"
import Pricing from "./Pricing"

const Home = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const row1 = [
    "https://res.cloudinary.com/dcurthbq9/image/upload/v1711860726/tc527oanclpt0r10qvf1.png",
    "https://res.cloudinary.com/dcurthbq9/image/upload/v1711860725/z2meprrkdrq9pr00tq2r.jpg",
    "https://res.cloudinary.com/dcurthbq9/image/upload/v1711860726/tc527oanclpt0r10qvf1.png",
    "https://res.cloudinary.com/dcurthbq9/image/upload/v1711860725/z2meprrkdrq9pr00tq2r.jpg",
    "https://res.cloudinary.com/dcurthbq9/image/upload/v1711860726/tc527oanclpt0r10qvf1.png"
    
    


  ];


  return (
    <>
      <section className="min-h-90 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-2000 py-10 shadow-lg md:py-20 xl:py-48 ">
      {/* Video element */}
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover object-center">
        <source src={examplev} type="video/mp4" />
        {/* Provide alternative content in case the video cannot be played */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">SVCE SPARK</h1>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link to='/events'>
            <Link to="/events" className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</Link>
          </Link>
        </div>
      </div>
    </section>


        



      <div className="carousel py-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mx-8 ">Technical Events</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mx-16"></div>
        <br></br>
        <Slider {...settings}>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/bwb">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={build_with_bits} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">BUILD WITH BITS</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/coding_automata">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={coding_automata} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CODING AUTOMATA</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/coding_contest">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={coding_contest} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CODING CONTEST</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/idea_blitz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={idea_blitz} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">IDEA BLITZ</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={kahoot_quiz} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/robo_talk">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={robo_talk} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">ROBO TALK</h2>
              </Link>
            </div>
          </div>

          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/poster">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={poster} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">POSTER PRESENTATION</h2>
              </Link>
            </div>
          </div>

          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/paper">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={paper} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">PAPER PRESENTATION</h2>
              </Link>
            </div>
          </div>

          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/technical_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={quiz} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">TECHNICAL QUIZ</h2>
              </Link>
            </div>
          </div>

          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/flipIt">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={flipIt} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">FLIP_IT & PITCH_IT</h2>
              </Link>
            </div>
          </div>
        </Slider>
      </div>


      <div className="carousel py-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mx-8 ">Non Technical</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mx-16"></div>
        <br></br>
        <Slider {...settings}>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/colour-paint">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={color_paint} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">ONE MINUTE DRAWING</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/dialogue-war">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={dialoguewar} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">DIALOGUE WAR</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/dillse-dance">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={dillse} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">DILLSE DANCE</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/dumb-charades">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={dumbcharades} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">DUMB CHARADES</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/face-paint">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={face_paint} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">FACE PAINT</h2>
              </Link>
            </div>
          </div>
          <div className="box  ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/gana">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={gana} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">GAANA</h2>
              </Link>
            </div>
          </div>
     
    
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/poetry-pros">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={poetry} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">POETRY PROS</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/ramp-walk">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={rampwalk} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">RAMP WALK</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/reels">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={reels} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">REELS</h2>
              </Link>
            </div>
          </div>

          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/sound-space">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={sound_space} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">SOUND SPACE</h2>
              </Link>
            </div>
          </div>
          <div className="box  ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/stand-up-comedy">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={standupcomedy} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">STAND UP COMEDY</h2>
              </Link>
            </div>
          </div>

        </Slider>
      </div>

      <div className="carousel  py-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mx-8 ">spot Events</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mx-16"></div>
        <br></br>
        <Slider {...settings}>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/gully_cricket">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={gully_cricket} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">GULLY CRICKET</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/tug_of_war">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={tug_of_war} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">TUG OF WAR</h2>
              </Link>
            </div>
          </div>
          
          
          
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/bgmi">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={bgmi} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">BGMI</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/ff">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={ff} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">FREE FIRE</h2>
              </Link>
            </div>
          </div>

          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/movieQuiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={movieQuiz} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">MOVIE QUIZ</h2>
              </Link>
            </div>
          </div>

        </Slider>
      </div>

      <Pricing/>

      <AppContainer>
        <Wrapper>
          <Text>Special Thanks to</Text>
          <Note>Our honorable Sponsers</Note>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>

        </Wrapper>
      </AppContainer>

    </>
  )
}
export default Home


const AppContainer = styled.div`
  width: 100%;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 430;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 85%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  height : 100px;
`;

const Image = styled.img`
  object-fit: contain;

  /* border: 1px solid black; */
  border-radius: 0.5rem;
 
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;