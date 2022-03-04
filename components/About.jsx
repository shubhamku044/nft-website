import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="scroll-m-8 bg-pink-50 py-24 px-4" id="about">
      <div className="mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12">
        <h3 className="text-3xl font-medium uppercase sm:text-5xl">About</h3>
        <p className="max-w-3xl text-center font-light tracking-wider sm:text-lg">
          WonderPals is a collection of 10,000 delightfully cute NFTs living on
          the Ethereum blockchain, created from a combination of over 200 traits
          with varying rarity across different categories. There will be some
          special 1/1s sprinkled in the collection, and you might get lucky and
          mint one with a trait from your favorite project! Our vision is to
          bring more joy to the world and bring people together through
          community, creativity, and fun art!
        </p>
        <div className="grid grid-cols-3 gap-6 overflow-x-hidden sm:grid-cols-6 md:gap-6 lg:gap-8 xs:gap-8">
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
            <Image src="/test-img.png" layout="fill" />
          </div>
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
            <Image src="/test-img.png" layout="fill" />
          </div>
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
            <Image src="/test-img.png" layout="fill" />
          </div>
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
            <Image src="/test-img.png" layout="fill" />
          </div>
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
            <Image src="/test-img.png" layout="fill" />
          </div>
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
            <Image src="/test-img.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
