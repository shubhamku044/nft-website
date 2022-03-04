import React from 'react'

const ContactUs = () => {
  return (
    <section className="relative bg-pink-100 py-24 px-4">
      <div className="mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        <h3 className="text-3xl font-medium uppercase sm:text-5xl">
          PARTNERSHIPS & COLLABS
        </h3>
        <div className="flex flex-col items-center space-y-6">
          <p className="max-w-3xl text-center font-normal tracking-wider sm:text-lg">
            If you're interested in collaborating with WonderPals, contact us
            below!
          </p>
          <button className="rounded border-[2px] border-black bg-blue-500 px-6 py-3 text-xl font-bold uppercase tracking-widest text-white duration-200 ease-out hover:bg-blue-600 sm:text-2xl">
            contact us
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
