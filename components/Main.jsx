import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center space-y-12 bg-gradient-to-br from-[#657dc0] to-[#d48fe9] pt-10"
    >
      <div className="relative h-32 w-32">
        <Image src="/chubby.svg" layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col items-center space-y-4 text-white">
        <h1 className="text-3xl font-bold uppercase sm:text-5xl">
          chubbychums
        </h1>
        <div className="flex flex-col items-center text-lg font-medium sm:text-xl">
          <p>Coming February 26, 2022</p>
          <p>2pm PST / 5pm EST</p>
        </div>
      </div>
      <button className="rounded border-[2px] border-white bg-blue-500 px-6 py-3 text-xl font-bold uppercase tracking-widest text-white duration-200 ease-out hover:bg-blue-600 sm:text-2xl">
        Mint chubbychums
      </button>
    </div>
  )
}

export default Main
