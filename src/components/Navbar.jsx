import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../constants/index.js';
import { logo } from '../assets';
import { gsap } from "gsap";
import { useAnimeContext } from '../context/animeContext.jsx';
import { GoDotFill } from "react-icons/go";
import { useGSAP } from '@gsap/react';


const Navbar = () => {
  const navbarRef = useRef(null);
  const { message, setMessage } = useAnimeContext()

  useGSAP(()=>{
    gsap.fromTo("#navbar",
    {
      y: -100,
    }
    ,{
      y : 0,
      duration : 2,
      ease : 'power1.inOut',
    })
  },[])

  const handleMouseOver = (message)=>{
    setMessage(message)
  }

  const handleMouseOut = ()=>{
    setMessage("Hi! How you doin'?")
  }

  return (
    <div id="navbar" className="hero__top flex justify-between fixed w-full top-0 bg-transparent" ref={navbarRef}>
      <div className={`h-gradient`} />

      <div className="headerFont z-50" data-menu-item data-hidden>
        <Link to="/">
          <img src={logo} alt="Spark Spectrum Studio" className="main_logo h-auto hover:text-[#B46633]" />
        </Link>
      </div>

      <div className="message flex text-[#E2E2E2] items-center">
        <div className="message_point">
            <GoDotFill className="text-[#B46633] text-xl" />
        </div>
        <div className="message_main ml-2">
            {message}
        </div>
      </div>

      <div data-menu-item data-hidden className="navbar_nav text-[#E2E2E2]">
        {navItems.map((item) => (
          <span key={item.key} data-menu-item data-hidden
           onMouseOver={()=>handleMouseOver(item.message)}
           onMouseLeave={handleMouseOut}
          >
            <Link to={item.path} className="headerFont res_font hover:text-[#B46633] navLink">
              {item.name}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
