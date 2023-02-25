import React, { useState } from 'react'
import "../Components/StickyNavbarOne.css"
import { Link as Links } from "react-scroll"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 70) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)


  return (
    <nav className={fix ? 'navbar fixed' : 'navbar'}>
      <div className={`nav-items ${isOpen && "open"}`}>
      <Links to='home' spy={true} smooth={true} duration={300} offset={0}>HOME</Links>
        <Links to='about' spy={true} smooth={true} duration={300} offset={0}>ABOUT</Links>
        <Links to="tokenomics" spy={true} smooth={true} duration={300} offset={30}>TOKENOMICS</Links>
        <Links to="roadmap" spy={true} smooth={true} duration={300} offset={60}>ROADMAP</Links>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >


        <div className="bars"></div>
      </div>
      <div className="nav-button">
        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x0759c128fba5109bfedd4e7ac167acd9a95418ca" target="_blank">BUY NOW</a>
      </div>
    </nav>
  )
}

export default Navbar