import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <section className="relative scroll-m-8 bg-pink-50 py-24 px-6" id="faq">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-8 sm:space-y-12">
        <h3 className="mx-auto text-3xl font-medium uppercase sm:text-5xl">
          FAQ
        </h3>
        <div className="space-y-6">
          <Accordion />
        </div>
      </div>
    </section>
  )
}

export default FAQ
