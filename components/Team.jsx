import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section
      className="relative scroll-m-10 bg-yellow-200 py-24 px-4"
      id="team"
    >
      <div className="mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12">
        <h3 className="text-3xl font-medium uppercase sm:text-5xl">Team</h3>
        <div className="flex flex-col space-y-10 sm:flex-row sm:space-y-0 sm:space-x-8">
          <div className="group flex flex-col items-center space-y-4">
            <div className="relative h-48 w-48 duration-200 group-hover:scale-105 sm:h-40 sm:w-40 md:h-48 md:w-48">
              <Image src="/team.png" layout="fill" />
            </div>
            <div className="space-y-1">
              <h6 className="text-center text-2xl font-semibold">MINA</h6>
              <p className="max-w-xs text-center text-lg font-light sm:max-w-[15rem]">
                Founder, Artist, Creative & Marketing Director
              </p>
              <div className="relative mx-auto h-8 w-8 cursor-pointer duration-200 hover:scale-125">
                <Image
                  src="/tw.svg"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center space-y-4">
            <div className="relative h-48 w-48 duration-200 group-hover:scale-105 sm:h-40 sm:w-40 md:h-48 md:w-48">
              <Image src="/team.png" layout="fill" />
            </div>
            <div className="space-y-1">
              <h6 className="text-center text-2xl font-semibold">MINA</h6>
              <p className="max-w-xs text-center text-lg font-light sm:max-w-[15rem]">
                Founder, Artist, Creative & Marketing Director
              </p>
              <div className="relative mx-auto h-8 w-8 cursor-pointer duration-200 hover:scale-125">
                <Image
                  src="/tw.svg"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center space-y-4">
            <div className="relative h-48 w-48 duration-200 group-hover:scale-105 sm:h-40 sm:w-40 md:h-48 md:w-48">
              <Image src="/team.png" layout="fill" />
            </div>
            <div className="space-y-1">
              <h6 className="text-center text-2xl font-semibold">MINA</h6>
              <p className="max-w-xs text-center text-lg font-light sm:max-w-[15rem]">
                Founder, Artist, Creative & Marketing Director
              </p>
              <div className="relative mx-auto h-8 w-8 cursor-pointer duration-200 hover:scale-125">
                <Image
                  src="/tw.svg"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
