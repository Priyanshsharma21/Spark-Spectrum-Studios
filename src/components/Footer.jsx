import { useAnimeContext } from '../context/animeContext'
import { logoblack } from '../assets'
import React from 'react'

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
            <div className="f-box2"
            onMouseOver={()=>handleMouseOver("All the boring stuff here.")}
            onMouseLeave={handleMouseOut}
            >
            <a href="/imprint" className="f-imprint-link flex items-center justify-center">
                <span className="f-imprint">Imprint &amp; Privacy Policy</span>
            </a>
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