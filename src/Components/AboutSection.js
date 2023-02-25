import React, { useState } from 'react'
import "./AboutSection.css"
import About from '../Images/rabbittoken1.png'
import Vision from '../Images/Vision.png'
import Mission from '../Images/Mission.png'
import Future from '../Images/future.png'
import AboutOverlay from '../Images/AboutOverlay.png'

const AboutSection = () => {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="About-container" id='about'>
      <h1>ABOUT US</h1>
      <div className="AboutOverlay">
        <img src={AboutOverlay}/>
      </div>
      <div className="About-row">
        <div className="block-tabs">
          <button className={toggleState === 1 ? " tabs-1 active-tabs" : "tabs-1 "} onClick={() => toggleTab(1)} >ABOUT</button>
           <button disabled={true}  className={toggleState === 2 ? " tabs-1 active-tabs" : "tabs-1 " } onClick={() => toggleTab(2)} >MISSION</button>
          <button disabled={true} className={toggleState === 3 ? "tabs-1 active-tabs" : "tabs-1"} onClick={() => toggleTab(3)} >VISION</button>
          <button disabled={true} className={toggleState === 4 ? "tabs-1 active-tabs" : "tabs-1"} onClick={() => toggleTab(4)}>FUTURE</button>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <img src={About}/>
            <h2>What is Happy New Hare?</h2>
            <p>Happy New Hare token is a token on the Ethereum (ERC20) BlockChain Network, the Happy New Hare token  was created to build the Future of Decentralized Finance in 2023. Earn special DeFi powers and accumulate knowledge by owning Happy New Hare Tokens</p>
          </div>
          <div className={toggleState === 2 ? "content active-content" : "content"}>
          <img src={Mission}/>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla veniam nobis voluptas mollitia quidem porro eum provident facilis atque sapiente laudantium saepe, harum laborum maxime voluptates! Nulla iste quia, sunt ipsum eum exercitationem vitae excepturi rem doloribus atque veritatis consequatur illum sapiente optio nihil quod illo corporis placeat consectetur. Obcaecati nemo non repellendus inventore autem est deleniti reiciendis optio libero iste ab molestias recusandae natus, nulla soluta iure unde dolore! Maiores autem minima alias ut tenetur at, ullam quas?</p>
          </div>
          <div className={toggleState === 3 ? "content active-content" : "content"}>
          <img src={Vision}/>
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla veniam nobis voluptas mollitia quidem porro eum provident facilis atque sapiente laudantium saepe, harum laborum maxime voluptates! Nulla iste quia, sunt ipsum eum exercitationem vitae excepturi rem doloribus atque veritatis consequatur illum sapiente optio nihil quod illo corporis placeat consectetur. Obcaecati nemo non repellendus inventore autem est deleniti reiciendis optio libero iste ab molestias recusandae natus, nulla soluta iure unde dolore! Maiores autem minima alias ut tenetur at, ullam quas?</p>
          </div>
          <div className={toggleState === 4 ? "content active-content" : "content"}>
          <img src={Future}/>
            <h2>Our Future</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla veniam nobis voluptas mollitia quidem porro eum provident facilis atque sapiente laudantium saepe, harum laborum maxime voluptates! Nulla iste quia, sunt ipsum eum exercitationem vitae excepturi rem doloribus atque veritatis consequatur illum sapiente optio nihil quod illo corporis placeat consectetur. Obcaecati nemo non repellendus inventore autem est deleniti reiciendis optio libero iste ab molestias recusandae natus, nulla soluta iure unde dolore! Maiores autem minima alias ut tenetur at, ullam quas?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection