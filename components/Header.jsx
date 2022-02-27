import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuAlt3Icon } from '@heroicons/react/solid'

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full ${
        navbar
          ? 'border-b-0 bg-pink-50 py-4 px-6 backdrop-blur-sm md:px-10'
          : 'border-b-0 py-8 px-10 md:px-20'
      } transition-all duration-200 ease-out`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="#home">
          <a>
            <h2 className="relative h-16 w-16">
              <Image src="/WP_LOGO.svg" layout="fill" objectFit="contain" />
            </h2>
          </a>
        </Link>
        <div className="block md:hidden">
          <MenuAlt3Icon className="h-8 w-8" />
        </div>
        <ul className="hidden items-center space-x-6 text-lg font-semibold uppercase text-gray-800 md:flex">
          <li className="cursor-pointer duration-200 hover:text-gray-900">
            About
          </li>
          <li className="cursor-pointer duration-200 hover:text-gray-900">
            Wondermap
          </li>
          <li className="cursor-pointer duration-200 hover:text-gray-900">
            faq
          </li>
          <li className="cursor-pointer duration-200 hover:text-gray-900">
            team
          </li>
        </ul>
        <ul className="hidden items-center md:flex md:space-x-4">
          <li>
            <Link href="#">
              <a className="relative block h-8 w-8 duration-200 hover:scale-110">
                <Image src="/tw_black.svg" layout="fill" objectFit="contain" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="relative block h-8 w-8 duration-200 hover:scale-110">
                <Image src="/tw_black.svg" layout="fill" objectFit="contain" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="relative block h-8 w-8 duration-200 hover:scale-110">
                <Image src="/tw_black.svg" layout="fill" objectFit="contain" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
