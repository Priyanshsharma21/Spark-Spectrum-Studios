import { useAnimeContext } from '../context/animeContext'
import React from 'react'

const Content = () => {
  const { setMessage } = useAnimeContext()

  const handleMouseOver = (message)=>{
    setMessage(message)
  }

  const handleMouseOut = ()=>{
    setMessage("Hi! How you doin'?")
  }
  return (
    <div className="content bg-[#161616]
    flex flex-col justify-center items-center text-[#e2e2e2]
    ">
      <div>
        Coming soon on this website. {" "}
      </div>
      <div
       onMouseOver={()=>handleMouseOver("Click to visit our old website.")}
       onMouseLeave={handleMouseOut}
      >
        <a href="https://ssstudios.netlify.app" target='_blank' className="underline text-[#b46633]">
          Check it on our old website
        </a>
      </div>
    </div>
  )
}

export default Content