import React from 'react'

const ContactUs = () => {
  return (
    <section className="relative bg-pink-200 py-24 px-4">
      <div className="mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        <h3 className="text-5xl font-medium uppercase">
          PARTNERSHIPS & COLLABS
        </h3>
        <div className="flex flex-col items-center space-y-6">
          <p className="max-w-3xl text-center font-normal tracking-wider sm:text-lg">
            If you're interested in collaborating with WonderPals, contact us
            below!
          </p>
          <button className="rounded-full border-[3px] border-black bg-yellow-200 px-6 py-3 text-2xl font-bold uppercase tracking-widest duration-200 ease-out hover:bg-yellow-300">
            contact us
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
