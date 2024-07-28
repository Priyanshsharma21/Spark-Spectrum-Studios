import { useAnimeContext } from '../context/animeContext'
import { logoblack } from '../assets'
import React from 'react'
import { footer_social_media } from '../constants'

const Footer = () => {
    const { setMessage } = useAnimeContext()

    const handleMouseOver = (message)=>{
        setMessage(message)
      }
    
      const handleMouseOut = ()=>{
        setMessage("Hi! How you doin'?")
      }
  return (
    <footer className="footer">
        <div className="f-brief-box"
         onMouseOver={()=>handleMouseOver("Contact us!")}
         onMouseLeave={handleMouseOut}
        >
            <span className="f-brief">
            sparkspectrumstudios<span className="f-point">@</span>gmail.com
            </span>
        </div>{" "}
        <div className="f-l2-container">
            <div className="f-box1">
            <div className="f-logo">
                <img src={logoblack} alt="Spark Spectrum Studio" className="logo" />
            </div>
            </div>{" "}
            <div className="f-box2 flex justify-center items-center"
            onMouseOver={()=>handleMouseOver("All the boring stuff here.")}
            onMouseLeave={handleMouseOut}
            >
            {footer_social_media.map((item) => (
                    <div key={item.name} className="ml-5">
                      <a href={item.url} target="_blank" className="text-blue-400">
                        <item.icon className='text-[#161616] text-xl font-semibold footer_logo'/>
                      </a>
                    </div>
            ))}
            </div>{" "}
            <div className="f-box3">
            <span className="f-copyright">
                © <span className="f-copyright-year">2024</span> by Spatzek Studio.
                <br />
                All Rights Reserved.
            </span>
            </div>
        </div>
    </footer>

  )
}

export default Footer