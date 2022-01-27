import Link from 'next/link'
import { Router, useRouter } from 'next/router'
// import Image from 'next/image'

function Navbar() {
  const router = useRouter();
  return (
    <nav className='w-full flex justify-between h-12 align-middle mb-2 border-b border-gray-200'>
      <div className="logo hidden">
        {/* <Image src="/logo.png" alt="site logo" width={128} height={77} /> */}
      </div>
      <Link href="/"><a className={("px-4 text-sm flex flex-col justify-center  font-nunito") + (router.pathname == "/" ? " text-[#41EAD4] font-medium active" : " font-semibold text-white")}>Home</a></Link>
      <Link href="/about"><a className={("px-4 text-sm flex flex-col justify-center font-nunito hover:text-[#41EAD4]") + (router.pathname == "/about" ? " text-[#41EAD4] font-medium active" : " font-semibold text-white")}>About</a></Link>
      <Link href="/blogs/"><a className={("px-4 text-sm flex flex-col justify-center font-nunito hover:text-[#41EAD4]") + (router.pathname.startsWith("/blogs") ? " text-[#41EAD4] font-medium active" : " font-semibold text-white") }>Blogs</a></Link>
    </nav>
  );
}

export default Navbar;