import React from "react"
import { Link } from "react-router-dom"
import "./homes.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled, { keyframes, css } from "styled-components"

const Home = () => {

  var settings = {
    dots: true,
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
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];
  return (
    <>
      <section className="min-h-90 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden    bg-gray-2000 py-16 shadow-lg md:py-20 xl:py-48 ">

        <img src={process.env.PUBLIC_URL + '/images/clgpost.jpg'} loading="lazy" alt=" by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0  mix-blend-multiply"></div>
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">SVCE SPARk</h1>

          <div className="flex  flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link to='/events'>
              <a href="/" className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</a>
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


      <section className="text-gray-600 body-font overflow-x-auto">
        <div className="container px-5 py-4 mx-auto ">
          <div className="flex flex-wrap w-full mb-6">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Technical events</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/bwb">
                <div className=" bg-gray-200 p-6 rounded-lg">

                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />

                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">BUILD WITH BITS</h2>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-200 p-6 rounded-lg">
                <Link to="/circut_trace">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                </Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CIRCUT TRACE</h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-200 p-6 rounded-lg">
                <Link to="/coding_automata">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                </Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CODING AUTOMATA</h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-200 p-6 rounded-lg">
                <Link to="/coding_contest">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                </Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">CODING CONTEST</h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-200 p-6 rounded-lg">
                <Link to="/idea_blitz">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                </Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">IDEA BLITZ</h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-200 p-6 rounded-lg">
                <Link to="/kahoot_quiz">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                </Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-200 p-6 rounded-lg">
                <Link to="/robo_talk">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                </Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">ROBO TALK</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-4">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">other events</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Some thing about it.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_2.jpg'} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 2</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">SEvent 3</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-4">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Non technical</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">some thing about the non technical</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_3.jpg'} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 2</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="  bg-gray-2000 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">SEvent 3</h2>
                <p className="leading-relaxed text-base">about the event</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>

      <div className="carousel">
        <h2>Technical Events</h2>
        <br></br>
        <Slider {...settings}>
          <div className="box">
            <div className=" bg-gray-200 p-6 rounded-lg">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className=" bg-gray-200 p-6 rounded-lg">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className=" bg-gray-200 p-6 rounded-lg">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className=" bg-gray-200 p-6 rounded-lg">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className=" bg-gray-200 p-6 rounded-lg">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className=" bg-gray-200 p-6 rounded-lg">
              <Link to="/kahoot_quiz">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center ">KAHOOT QUIZ</h2>
              </Link>
            </div>
          </div>
        </Slider>
      </div>

    </>
  )
}
export default Home


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
  width: 1200px;
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
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;