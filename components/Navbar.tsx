import Link from 'next/link'
import { Router, useRouter } from 'next/router'
// import Image from 'next/image'

function Navbar() {
  const router = useRouter();
  return (
    <nav className='w-full align-middle px-2 bg-gradient-to-br from-[#232F58] to-[#234B66] sticky'>
      <div className='w-full h-12 flex justify-between border-b border-gray-600 px-8 md:px-20 lg:px-24 xl:px-48 md:justify-center'>
        <Link href="/"><a className={("px-4 text-sm flex flex-col justify-center  font-nunito") + (router.pathname == "/" ? " text-[#41EAD4] font-medium active" : " font-semibold text-white")}>Home</a></Link>
        <Link href="/about"><a className={("px-4 text-sm flex flex-col justify-center font-nunito hover:text-[#41EAD4] md:mx-12") + (router.pathname == "/about" ? " text-[#41EAD4] font-medium active" : " font-semibold text-white")}>About</a></Link>
        <Link href="/blogs/"><a className={("px-4 text-sm flex flex-col justify-center font-nunito hover:text-[#41EAD4]") + (router.pathname.startsWith("/blogs") ? " text-[#41EAD4] font-medium active" : " font-semibold text-white") }>Blogs</a></Link>
      </div>
    </nav>
  );
}

export default Navbar;