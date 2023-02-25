import React, { useEffect, useRef } from 'react'
import "../Components/HeroOne.css"
import OverlayMain from '../Images/happy.mp4'
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa"
import {SiTelegram} from "react-icons/si"
import {BsBarChartLine} from "react-icons/bs"
import AOS from 'aos'
import Logo from '../Images/Logo.png'
import { Link as Links } from "react-scroll"
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect (() => {
    AOS.init({duration: 1000});
  }, [])


  return (
    <div className="container" id="hero">
        <div className="first-row">
          <div className="nav-logo">
            <img src={Logo} data-aos="fade-right"/>
          </div>
          <div className="nav-socials">
            {/* <div className="facebook" data-aos="fade-left">
            <FaFacebook />
            </div> */}
            <a href="http://T.me/happynewhare" target="_blank"><div className="telegram" data-aos="fade-left" data-aos-delay="200">
            <SiTelegram />
            </div></a>
            <div className="twitter" data-aos="fade-left" data-aos-delay="300">
            <FaTwitter />
            </div>
            <a href="https://dexscreener.com/ethereum/0x0759C128FBA5109bFEDd4E7ac167AcD9a95418ca" target="_blank"><div className="instagram" data-aos="fade-left" data-aos-delay="400">
            <BsBarChartLine />
            </div></a>
          </div>
        </div>
        
        <div className="second-row">
              <h1>WELCOME TO <br></br>THE METAVERSE</h1>
              <br></br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam repudiandae optio ut numquam beatae error doloribus corrupti cum repellendus modi.</p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Links className='second' to='about' spy={true} smooth={true} duration={300} offset={0}>LEARN MORE</Links>
        </div>
    </div>
  )
}

export default Hero