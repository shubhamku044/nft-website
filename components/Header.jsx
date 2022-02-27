import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'
import styles from '../styles/Header.module.scss'

const sections = [
  { section: 'about', id: 'about' },
  { section: 'wondermap', id: 'roadmap' },
  { section: 'faq', id: 'faq' },
  { section: 'team', id: 'team' },
]

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [active, setActive] = useState(false)

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
          ? 'border-b-0 bg-pink-50 py-4 px-6 backdrop-blur-sm lg:px-10'
          : 'border-b-0 py-8 px-10 lg:px-20'
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
        <div className="block cursor-pointer md:hidden">
          {!active ? (
            <MenuAlt3Icon
              className="h-8 w-8"
              onClick={() => setActive(!active)}
            />
          ) : (
            <XIcon className="h-8 w-8" onClick={() => setActive(!active)} />
          )}
        </div>
        <ul className="hidden items-center space-x-6 text-lg font-semibold uppercase text-gray-800 md:flex">
          {sections.map(({ section, id }, i) => {
            return (
              <li
                className="cursor-pointer duration-200 hover:text-gray-900"
                key={i}
              >
                <Link href={`#${id}`}>
                  <a>{section}</a>
                </Link>
              </li>
            )
          })}
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
        <div
          className={`${
            active ? styles.activeSidenav : styles.sidenav
          } flex items-center justify-center bg-red-100 md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-6 text-2xl font-normal uppercase">
            {sections.map(({ section, id }, i) => {
              return (
                <li
                  className="cursor-pointer duration-200 hover:text-gray-900"
                  key={i}
                >
                  <Link href={`#${id}`}>
                    <a onClick={() => setActive(!active)}>{section}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
