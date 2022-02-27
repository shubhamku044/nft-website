import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="relative bg-purple-500 py-16">
      <div className="flex flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-8">
          <ul className="flex space-x-4">
            <li>
              <Link href="#">
                <a target="_blank">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/opensea.svg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a target="_blank">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/opensea.svg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a target="_blank">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/opensea.svg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a target="_blank">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/opensea.svg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2 text-sm font-semibold uppercase text-white sm:text-xl">
            <span>© 2022 chubbychums LLC</span>
            <span>|</span>
            <span>Terms and condition</span>
          </div>
        </div>
        <div className="relative h-16 w-16">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </section>
  )
}

export default Footer
