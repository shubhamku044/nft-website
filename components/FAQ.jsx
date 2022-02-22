import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <section className="relative bg-purple-200 py-24 px-4">
      <div className="mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12">
        <h3 className="text-5xl font-medium uppercase">FAQ</h3>
        <div className="space-y-6">
          <Accordion />
        </div>
      </div>
    </section>
  )
}

export default FAQ
