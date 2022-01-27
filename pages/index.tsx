import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="blogs"/>
      </Head>
      <img src={windowSize.width < 768 ? "/background/1.1-mobile.jpg" : "/background/1.jpg"} className='w-[100vw] overflow-visible max-w-[100vw] absolute top-0 left-0 -z-[1]'></img>
      <div className='text-white'>
        <h1 className='font-nunito font-semibold text-3xl mt-24'>Hello folks!</h1>
        <h1 className='font-nunito font-semibold text-3xl mb-8'>Let's <div className='inline-block'>Burst</div> the Code</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/blogs/">
          <a>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

type WindowSize = {
  width: number,
  height: number
}

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