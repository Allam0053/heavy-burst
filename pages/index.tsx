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
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="blogs"/>
      </Head>
      <div className={('bg-no-repeat bg-cover bg-top ') + (windowSize.width < 768 ? 'bg-[url("/background/1.1-mobile.jpg")]' : 'bg-[url("/background/3.jpg")]')}>
        <div className="backdrop-blur-lg w-full h-full text-cyan1 min-h-[80vh] flex flex-col justify-center px-2 md:px-20 lg:px-24 xl:px-48">
          <h1 className='font-nunito font-semibold text-3xl standard-underline w-fit'>Hello folks!</h1>
          <h1 className='font-nunito font-semibold text-3xl mb-8'>Let's <div className='inline-block text-transparent bg-clip-text bg-gradient-to-br from-cyan2 to-cyan3 uppercase font-bold hover:animate-ping z-1'> Burst </div> the Code</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <Link href="/blogs/">
            <a className='mt-4'>See Ninja Listing</a>
          </Link>
        </div>
      </div>

      <div className='bg-back backdrop-blur '>
        <img src="decoration/Vector1.svg" alt="Vector" className=' absolute opacity-50 h-96 w-96'/>
        <img src="decoration/Vector.svg" alt="Vector" className=' absolute opacity-50 h-[48rem] w-[48rem]'/>
        <img src="decoration/Vector1.svg" alt="Vector" className='right-0 bottom-0 absolute opacity-50 h-96 w-96'/>
        <img src="decoration/Vector.svg" alt="Vector" className='right-0 bottom-0 absolute opacity-50 h-[48rem] w-[48rem]'/>
        <div className='backdrop-blur-xl w-full text-cyan1 pt-16 px-2 md:px-20 lg:px-24 xl:px-48 flex flex-col'>

          <div className='flex justify-center align-middle mb-5'>
            <h2 className='text-5xl font-semibold inline tracking-wider uppercase font-dmserif text animate-background'>Blogs</h2>
            <div className='text-transparent bg-clip-text bg-gradient-to-br from-cyan2 to-cyan3 font-bold text-lg font-nunito inline mx-4 my-auto'>✕</div>
            <div className='inline my-auto'>some nice project to share</div>
          </div>


          <div className='grid grid-cols-2 items-center pb-40'>
            <div className='justify-self-end px-12'>
              <img src="content/Image.png" alt="content" className='z-10'/>
              <img src="decoration/dots.svg" alt="dots" className='-translate-y-[50%] -translate-x-[50%] z-10 absolute'/>
              <div className='absolute top-[50%] -translate-x-[50%] -translate-y-[70%] lg:-translate-y-[50%]'>
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
              <div>
                <div className='uppercase tracking-widest text-sm font-semibold text-cyan1 mb-2'>share it:</div>
                <div className='z-10'>
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
                <div className='w-24 h-6 -translate-y-4 hover:w-32 border-2 border-transparent border-b-cyan2 border-r-cyan2 ease duration-150 -z-10 absolute'></div>
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className='bg-back backdrop-blur'>
        <div className='backdrop-blur-xl w-full text-cyan1 pt-16 px-2 md:px-20 lg:px-24 xl:px-48 flex'>
          <div className='w-[50%]'>
            <h2>About Us</h2>
            <div>
              We're a team of four passioned people.

              We're ready to take the world by storm and 
              let you find new travel opportunities.

              Our everyday task is to make sure that you satisfied with the services and products that we provide. 

              With 💖 from Amsterdam, Netherlands.
            </div>
            <button>READ MORE ABOUT US</button>
          </div>
          <div className='w-[50%]'>
            <img src="content/1.png" alt="content" className='w-[50%] inline' />
            <img src="content/2.png" alt="content" className='w-[50%] inline' />
            <img src="content/3.png" alt="content" className='w-[50%] inline' />
            <img src="content/4.png" alt="content" className='w-[50%] inline' />
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