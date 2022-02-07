import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import WindowSize from '../type/WindowSize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const windowSize = useWindowSize();
  const [isShown, setIsShown] = useState(false);
  const [isZoom, setIsZoom] = useState(false);

  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="blogs"/>
      </Head>
      <div className={('bg-no-repeat bg-cover bg-top ') + (windowSize.width < 768 ? 'bg-[url("/background/1.1-mobile.jpg")]' : 'bg-[url("/background/3.jpg")]')}>
        <div className=" w-full h-full text-cyan1 min-h-[90vh] flex flex-col justify-center px-2 md:px-20 lg:px-24 xl:px-48">
          <h1 className='font-nunito font-semibold text-3xl standard-underline w-fit'>Hello folks!</h1>
          <h1 className='font-nunito font-semibold text-3xl mb-8'>Let's <div className='inline-block text-transparent bg-clip-text bg-gradient-to-br from-cyan2 to-cyan3 uppercase font-bold hover:animate-ping z-1'> Burst </div> the Code</h1>
          <p className='text-sm lg:w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <Link href="/blogs/">
            <a className='mt-4'>See Ninja Listing</a>
          </Link>
        </div>
      </div>

      <div className='bg-back relative'>
        <img src="decoration/Vector1.svg" alt="Vector" className=' absolute opacity-50 h-96 w-96'/>
        <img src="decoration/Vector.svg" alt="Vector" className=' absolute opacity-50 h-[48rem] w-[48rem]'/>
        <img src="decoration/Vector1.svg" alt="Vector" className='right-0 bottom-0 absolute opacity-50 h-96 w-96'/>
        <img src="decoration/Vector.svg" alt="Vector" className='right-0 bottom-0 absolute opacity-50 h-[48rem] w-[48rem]'/>
        <div className='w-full text-cyan1 pt-16 px-2 md:px-20 lg:px-24 xl:px-48 flex flex-col'>

          <div className='flex justify-center align-middle mb-5'>
            <h2 className='text-5xl font-semibold inline tracking-wider uppercase font-dmserif text animate-background'>Blogs</h2>
            <div className='text-transparent bg-clip-text bg-gradient-to-br from-cyan2 to-cyan3 font-bold text-lg font-nunito inline mx-4 my-auto'>✕</div>
            <div className='inline my-auto'>some nice project to share</div>
          </div>


          <div className='grid grid-cols-2 items-center pb-40'>
            <div className='justify-self-end px-12 relative'>
              <img src="content/Image.png" alt="content"
                onMouseEnter={() => setIsZoom(true)}
                onMouseLeave={() => setIsZoom(false)}/>
              <img src="decoration/dots.svg" alt="dots" className='-translate-y-[50%] -translate-x-[50%] z-10 absolute'/>
              <div className={'absolute top-[50%] -translate-x-[50%] -translate-y-[70%] lg:-translate-y-[50%] ease duration-200 ' + (isZoom && (
                  'scale-125'
                ))}>
                <div className='w-32 h-4 border-2 border-transparent border-l-cyan2 border-t-cyan2'></div>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-cyan2 to-cyan3 font-bold text-lg uppercase tracking-wider font-nunito'>01</h2>
                <div className='font-bold text-lg uppercase tracking-wider font-nunito'>Grand dune</div>
                <div className='font-bold text-lg uppercase tracking-wider font-nunito'>landscape</div>
              </div>
            </div>

            <div className='justify-self-start'>
              <div className='text-4xl font-semibold inline tracking-wider uppercase font-dmserif'>Chill Adventure</div>
              <div className='text-sm my-8 w-[60%] font-semibold'>
                Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
              </div>
              <div className='text-sm my-8 w-[60%]'>
                Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.
              </div>
              <div className='relative overflow-visible'>
                <div className='uppercase tracking-widest text-sm font-semibold text-cyan1 mb-2 '>share it:</div>
                <div className='z-10 pr-4 pb-2 mb-2 border-2 border-transparent border-b-cyan2 border-r-2 border-r-cyan2 ease duration-150 w-fit'>
                  <a href="https://github.com/Allam0053">
                    <FontAwesomeIcon icon={faInstagram} className='text-cyan3 hover:text-cyan1 ease duration-200 cursor-pointer' size="lg"/>
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} className='text-cyan3 hover:text-cyan1 ease duration-200 cursor-pointer mx-2' size="lg"/>
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className='text-cyan3 hover:text-cyan1 ease duration-200 cursor-pointer' size="lg"/>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className='bg-back relative'>
        <img src="decoration/Vector.svg" alt="Vector" className='right-0 absolute opacity-50 h-[48rem] w-[48rem]'/>
        <img src="decoration/Vector1.svg" alt="Vector" className=' bottom-0 absolute opacity-50 h-96 w-96'/>
        <img src="decoration/Vector.svg" alt="Vector" className=' bottom-0 absolute opacity-50 h-[48rem] w-[48rem]'/>
        <div className='w-full text-cyan1 pt-16 px-2 md:px-20 lg:px-24 xl:px-48 flex pb-24 relative'>
          <div className='w-[50%] pr-12 self-center flex justify-end'>
            <div className="w-[60%] items-start">
              <h2 className='text-4xl font-semibold inline tracking-wider uppercase font-dmserif'>About Us</h2>
              <div className='text-sm my-8 font-semibold'>
                We're a team of four passioned people.
              </div>
              <div className='text-sm my-8'>
                We're ready to take the world by storm and 
                let you find new travel opportunities.

                Our everyday task is to make sure that you satisfied with the services and products that we provide. 
              </div>
              <div className='text-sm my-8 font-semibold'>
                With 💖 from Amsterdam, Netherlands.
              </div>
              <button className='uppercase tracking-wider bg-cyan3 hover:bg-cyan2 text-cyan1 hover:drop-shadow-[0_8px_25px_rgba(65,234,212,0.3)] px-4 py-4 rounded-full flex items-center ease duration-100'>
                <div className='pl-6'>READ MORE ABOUT US</div>
                <div className='h-[2px] w-6 bg-cyan1 translate-x-8'></div>
              </button>
            </div> 
          </div>
          <div className='w-[50%] pr-12 relative'>
            <img src="content/1.png" alt="content" className='w-[50%] inline opacity-25 hover:opacity-100 ease duration-100 relative' 
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)} />
            {isShown && (
              <div className='text-black absolute top-[25%] -left-4 -translate-y-[50%] px-2 py-4 rounded-md bg-cyan1 font-nunito font-extrabold tracking-wide uppercase text-xs'
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                  MARTIN JACK, 
                  <div className='text-cyan3 inline'>CEO</div>
              </div>
            )}
            <img src="content/2.png" alt="content" className='w-[50%] inline opacity-25 hover:opacity-100 ease duration-100 relative' />
            <img src="content/3.png" alt="content" className='w-[50%] inline opacity-25 hover:opacity-100 ease duration-100 relative' />
            <img src="content/4.png" alt="content" className='w-[50%] inline opacity-25 hover:opacity-100 ease duration-100 relative' />
          </div>
        </div>
      </div>

      <div className='bg-back relative'>
        <img src="decoration/Vector.svg" alt="Vector" className='right-0 absolute opacity-50 h-[48rem] w-[48rem]'/>
        <img src="decoration/Vector1.svg" alt="Vector" className=' bottom-0 absolute opacity-50 h-96 w-96'/>
        <img src="decoration/Vector.svg" alt="Vector" className=' bottom-0 absolute opacity-50 h-[48rem] w-[48rem]'/>
        <div className='w-full text-cyan1 pt-16 px-2 md:px-20 lg:px-24 xl:px-48 flex pb-24'>
          <div className='w-full flex flex-col self-center items-center text-center bg-black py-12   rounded-lg'>
            <h2 className='text-4xl font-semibold tracking-wider uppercase font-dmserif'>People’s thoughts</h2>
            <div className='text-sm my-8 font-semibold tracking-wider'>
              SEE WHAT ARE OTHERS SAYING
            </div>

            <div className='w-[60%] grid grid-cols-2 gap-4 self-center'>
              <div className='w-full bg-backdim rounded-lg px-16 py-8 text-left relative'>
                <div className='text-6xl text-cyan2 absolute top-6 left-6'>“</div>
                <div className='text-sm font-semibold tracking-wide'>
                  Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                </div>
                <div className='text-sm my-8 tracking-wide font-thin'>
                  adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.
                </div>
                <div className='flex'>
                  <img src="content/testi.png" alt="" className='inline mr-4'/>
                  <div className='self-center uppercase tracking-wider text-xs font-bold font-nunito'>
                    Judy ROSELESS <br />
                    MARKETING HEAD at ROM.
                  </div>
                </div>
              </div>
              <div className='w-full bg-backdim rounded-lg px-16 py-8 text-left relative'>
                <div className='text-6xl text-cyan2 absolute top-6 left-6'>“</div>
                <div className='text-sm font-semibold tracking-wide'>
                  Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                </div>
                <div className='text-sm my-8 tracking-wide font-thin'>
                  adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.
                </div>
                <div className='flex'>
                  <img src="content/testi.png" alt="" className='inline mr-4'/>
                  <div className='self-center uppercase tracking-wider text-xs font-bold font-nunito'>
                    Judy ROSELESS <br />
                    MARKETING HEAD at ROM.
                  </div>
                </div>
              </div>
              <div className='w-full bg-backdim rounded-lg px-16 py-8 text-left relative'>
                <div className='text-6xl text-cyan2 absolute top-6 left-6'>“</div>
                <div className='text-sm font-semibold tracking-wide'>
                  Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                </div>
                <div className='text-sm my-8 tracking-wide font-thin'>
                  adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.
                </div>
                <div className='flex'>
                  <img src="content/testi.png" alt="" className='inline mr-4'/>
                  <div className='self-center uppercase tracking-wider text-xs font-bold font-nunito'>
                    Judy ROSELESS <br />
                    MARKETING HEAD at ROM.
                  </div>
                </div>
              </div>
              <div className='w-full bg-backdim rounded-lg px-16 py-8 text-left relative'>
                <div className='text-6xl text-cyan2 absolute top-6 left-6'>“</div>
                <div className='text-sm font-semibold tracking-wide'>
                  Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                </div>
                <div className='text-sm my-8 tracking-wide font-thin'>
                  adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.
                </div>
                <div className='flex'>
                  <img src="content/testi.png" alt="" className='inline mr-4'/>
                  <div className='self-center uppercase tracking-wider text-xs font-bold font-nunito'>
                    Judy ROSELESS <br />
                    MARKETING HEAD at ROM.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-back to-black relative'>
        <div className='w-full text-cyan1 flex flex-col self-center items-center text-center py-12 px-2 md:px-20 lg:px-24 xl:px-48 rounded-lg'>
          <h2 className='text-4xl font-semibold tracking-wider uppercase font-dmserif'>See you soon!</h2>
          <div className='text-sm my-4 font-semibold tracking-wider'>
            We hope to meet each other very soon.
          </div>
          <div className='w-[2px] h-16 my-16 bg-cyan2 rounded-full'></div>
        </div>
      </div>

      <div className='bg-black relative grid grid-cols-5 lg:px-[20%] pb-12'>
        <div className='text-cyan1'>
          <h5 className='uppercase text-lg tracking-wide font-bold'>About</h5>
          <div className='flex items-center my-2'>
            <div className='h-[2px] w-16 bg-cyan2 rounded-full'></div>
            <div className='h-[8px] w-[8px] bg-transparent border-2 border-cyan2 rotate-45'></div>
          </div>
          <div className='font-nunito font-thin my-2'>Our mission</div>
          <div className='font-nunito font-thin mb-2'>Terms</div>
          <div className='font-nunito font-thin mb-2'>Copyright</div>
        </div>
        <div className='text-cyan1'>
          <h5 className='uppercase text-lg tracking-wide font-bold'>FAQ</h5>
          <div className='flex items-center my-2'>
            <div className='h-[2px] w-16 bg-cyan2 rounded-full'></div>
            <div className='h-[8px] w-[8px] bg-transparent border-2 border-cyan2 rotate-45'></div>
          </div>
          <div className='font-nunito font-thin my-2'>Rules</div>
          <div className='font-nunito font-thin mb-2'>Tickets</div>
          <div className='font-nunito font-thin mb-2'>Editions</div>
          <div className='font-nunito font-thin mb-2'>Contribute</div>
        </div>
        <div className='text-cyan1'>
          <h5 className='uppercase text-lg tracking-wide font-bold'>Event</h5>
          <div className='flex items-center my-2'>
            <div className='h-[2px] w-16 bg-cyan2 rounded-full'></div>
            <div className='h-[8px] w-[8px] bg-transparent border-2 border-cyan2 rotate-45'></div>
          </div>
          <div className='font-nunito font-thin my-2'>Star Gazing</div>
          <div className='font-nunito font-thin mb-2'>Dunes Madness</div>
          <div className='font-nunito font-thin mb-2'>Spooky Land</div>
        </div>
        <div className='text-cyan1'>
          <h5 className='uppercase text-lg tracking-wide font-bold'>Contact Us</h5>
          <div className='flex items-center my-2'>
            <div className='h-[2px] w-16 bg-cyan2 rounded-full'></div>
            <div className='h-[8px] w-[8px] bg-transparent border-2 border-cyan2 rotate-45'></div>
          </div>
          <div className='font-nunito font-thin my-2'>hello@example.com</div>
          <div className='font-nunito font-thin mb-2'>(405) 555-0128</div>
          <div className='font-nunito font-thin mb-2'>(252) 555-0126</div>
        </div>
        <div className='text-cyan1'>
          <h5 className='uppercase text-lg tracking-wide font-bold'>Follow us</h5>
          <div className='flex items-center my-2'>
            <div className='h-[2px] w-16 bg-cyan2 rounded-full'></div>
            <div className='h-[8px] w-[8px] bg-transparent border-2 border-cyan2 rotate-45'></div>
          </div>
          <div className='z-10 pr-4 pb-2 mb-2 ease duration-150 w-fit'>
            <a href="https://github.com/Allam0053">
              <FontAwesomeIcon icon={faInstagram} className='text-cyan3 hover:text-cyan1 ease duration-200 cursor-pointer' size="lg"/>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className='text-cyan3 hover:text-cyan1 ease duration-200 cursor-pointer mx-2' size="lg"/>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className='text-cyan3 hover:text-cyan1 ease duration-200 cursor-pointer' size="lg"/>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}
// bg-[url("/background/1.1-mobile.jpg")]

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  function handleResize(): void {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}