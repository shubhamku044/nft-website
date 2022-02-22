import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import FAQ from '../components/FAQ'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Main from '../components/Main'
import AboutFounder from '../components/AboutFounder.jsx'
import ContactUs from '../components/ContactUs'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="">
        <Main />
        <About />
        <Roadmap />
        <FAQ />
        <Team />
        <AboutFounder />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default Home
