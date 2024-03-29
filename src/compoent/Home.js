import React from "react"
import { Link } from "react-router-dom"
import "./homes.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled, { keyframes, css } from "styled-components"

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
    "https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo.png",
    "https://xlprojects.net/wp-content/uploads/2023/05/fortune-global-1024x564.png",
    "https://xlprojects.net/wp-content/uploads/2023/05/fortune-global-1024x564.png",
    "https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Logo-2048x1153.png",
    "https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Logo-2048x1153.png",


  ];


  return (
    <>
      <section className="min-h-90 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-2000 py-10 shadow-lg md:py-20 xl:py-48 ">
      {/* Video element */}
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover object-center">
        <source src={process.env.PUBLIC_URL + '/videos/clgpost.mp4'} type="video/mp4" />
        {/* Provide alternative content in case the video cannot be played */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">SVCE SPARk</h1>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link to='/events'>
            <Link to="/events" className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</Link>
          </Link>
        </div>
      </div>
    </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="flex w-full mb-4 flex-wrap  p-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  lg:mb-0 mb-4 text-center">AMPLE GALLERY :</h1>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/img_2.jpg'} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/img_3.jpg'} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/img_4.jpg'} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="carousel mt-6 py-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 m-8 ">Technical Events</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mx-16"></div>
        <br></br>
        <Slider {...settings}>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/bwb">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/build_with_bits.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">BUILD WITH BITS</h2>
              </Link>
            </div>
          </div>
          <div className="circut_trace">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/circut_trace">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/circut_trace.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CIRCUT TRACE</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/coding_automata">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/coding_automata.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CODING AUTOMATA</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/coding_contest">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/coding_competition.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CODING CONTEST</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/idea_blitz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">IDEA BLITZ</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/kahoot_quiz.png'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/robo_talk">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/robo_talk.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">ROBO TALK</h2>
              </Link>
            </div>
          </div>

        </Slider>
      </div>


      <div className="carousel mt-6 py-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 m-8 ">Non Technical</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mx-16"></div>
        <br></br>
        <Slider {...settings}>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/colour-paint">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/color_paint.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">COLOUR PAINT</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/dialogue-war">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/dialogur_war.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">DIALOGUE WAR</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/dillse-dance">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/dance.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">DILLSE DANCE</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/dumb-charades">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/dumb_charades.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">DUMB CHARADES</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/face-paint">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/face_paint.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">FACE PAINT</h2>
              </Link>
            </div>
          </div>
          <div className="box  ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/gana">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">GANA</h2>
              </Link>
            </div>
          </div>
          <div className="box  ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/mehandi">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">MEHANDI</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/meme-challenge">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">MEME CHALLENGE</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/pencil-sketch">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">PENCIL SKETCH</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/period-pain">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">PERIOD PAIN</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/poetry-pros">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">POETRY PROS</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/ramp-walk">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">RAPM WALK</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/reels">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">REELS</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/short-film">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">SHORT FILM</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/sound-space">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">SOUND SPACE</h2>
              </Link>
            </div>
          </div>
          <div className="box  ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/stand-up-comedy">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">STAND UP COMEDY</h2>
              </Link>
            </div>
          </div>

        </Slider>
      </div>

      <div className="carousel mt-6 py-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 m-8 ">spot Events</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mx-16"></div>
        <br></br>
        <Slider {...settings}>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/gully_cricket">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/gully_cricket.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">GULLY CRICKET</h2>
              </Link>
            </div>
          </div>
          <div className=" box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/tug_of_war">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/tug_of_war.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">TUG OF WAR</h2>
              </Link>
            </div>
          </div>
          
          
          
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box ">
            <div className=" bg-gray-200 p-6 rounded-lg mx-10">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>

        </Slider>
      </div>

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
  width: 100vw;
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
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
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
  height : 60px;
`;

const Image = styled.img`
  object-fit: contain;

  /* border: 1px solid black; */
  border-radius: 0.5rem;
 
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;