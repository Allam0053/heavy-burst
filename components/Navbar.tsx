import Link from 'next/link'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import Image from 'next/image'

function Navbar() {
  const router = useRouter()

  return (
    <nav className="sticky w-full bg-gradient-to-tr from-[#052131] to-[#15374D] px-2 align-middle">
      <div className="flex h-12 w-full justify-between border-b border-gray-600 px-8 md:px-20 lg:px-24 xl:px-48">
        <div>
          <Image src="/logo.svg" width={48} height={48}></Image>
        </div>
        <div className="col-4 flex ">
          <Link href="/">
            <a
              className={
                'navlink ' +
                (router.pathname == '/'
                  ? ' navlink-active'
                  : ' navlink-inactive')
              }
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                'navlink hover:text-cyan2 md:mx-12 ' +
                (router.pathname == '/about'
                  ? ' navlink-active'
                  : ' navlink-inactive')
              }
            >
              About
            </a>
          </Link>
          <Link href="/blogs">
            <a
              className={
                'navlink hover:text-cyan2 ' +
                (router.pathname.startsWith('/blogs')
                  ? ' navlink-active'
                  : ' navlink-inactive')
              }
            >
              Blogs
            </a>
          </Link>
          <Link href="/dashboard">
            <a
              className={
                'navlink hover:text-cyan2 ' +
                (router.pathname.startsWith('/blogs')
                  ? ' navlink-active'
                  : ' navlink-inactive')
              }
            >
              Dashboard
            </a>
          </Link>
        </div>
        <a
          className="flex flex-col justify-center"
          href="https://github.com/Allam0053"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="ease text-cyan1 duration-200 hover:text-cyan3"
            size="lg"
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
