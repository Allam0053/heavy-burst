import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, []);

  return (
    <div
      className='custom'>
      <div>
        <style>{`
          .custom{
            color:#000;background:#fff;font-family:-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;
          }
          body {
            margin: 0;
          }
          .custom-1 {
            display:inline-block;border-right:1px solid rgba(0, 0, 0,.3);margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top;
          }
          .custom-2 {
            display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle;
          }
          .custom-3 {
            font-size:14px;font-weight:normal;line-height:inherit;margin:0;padding:0;
          }
        `}</style>
        <h1 className='custom-1'>
          404</h1>
        <div className='custom-2'>
          <h2 className='custom-3'>This page could not be found. return to Home in 3 seconds</h2>
        </div>
      </div>
    </div>
  );
}
 
export default NotFound;
