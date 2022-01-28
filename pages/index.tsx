import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import WindowSize from '../type/WindowSize';

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="blogs"/>
      </Head>
      <div className={('text-cyan1 bg-no-repeat min-h-[80vh] flex flex-col justify-center px-2 md:px-20 lg:px-24 xl:px-48 ') + (windowSize.width < 768 ? 'bg-[url("/background/1.1-mobile.jpg")]' : 'bg-[url("/background/1.desktop.jpg")]')}>
        <h1 className='font-nunito font-semibold text-3xl standard-underline w-fit'>Hello folks!</h1>
        <h1 className='font-nunito font-semibold text-3xl mb-8'>Let's <div className='inline-block text-transparent bg-clip-text bg-gradient-to-br from-cyan2 to-cyan3 uppercase font-bold hover:animate-ping z-1'> Burst </div> the Code</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/blogs/">
          <a className='mt-4'>See Ninja Listing</a>
        </Link>
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