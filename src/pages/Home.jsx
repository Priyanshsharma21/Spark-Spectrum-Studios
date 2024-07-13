import { HomeHero, HomeIntro, ProjectTeaser, Footer } from '../components'
import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#161616] w-full min-h-screen">
      <main>
        <section className="home">
          <HomeHero />
        </section>
        <section className="intro">
          <HomeIntro />
        </section>
      </main>
      <section className="project-teaser">
        <ProjectTeaser />
      </section>
      <Footer />
    </div>
  )
}

export default Home

