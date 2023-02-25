import React, { useState } from 'react'
import './Roadmap.css'
import Slider from "react-slick";
import {RoadmapData} from '../Components/RoadmapData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Roadmap = () => {

    const [slideIndex, setSlideindex] = useState(0)

    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "10px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:true,
        focusOnSelect: true,
        beforeChange: (current, next) => setSlideindex(next),
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows:false,
              dots:true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots:true,
            }
          }
        ]
      };

  return (
    <div className="roadmap-container" id='roadmap'>
        <h1>ROADMAP</h1>

        <div className="roadmap-main">
            <Slider {...settings}>
            {RoadmapData.map((item, index) => (
                <div className={index === slideIndex ? ' roadmapContent roadmapContent-active' : 'roadmapContent'}>
                    <div className="roadmapImage">
                        <img src={item.image}/>
                    </div>
                    <div className="roadmapText">
                        <div className="Maintexts">
                        <h2>{item.MainText}</h2>
                        <h3>{item.DateText}</h3>
                        <div className="MainContent">
                            <p>{item.FirstText}</p>
                            <p>{item.SecondText}</p>
                            <p>{item.ThirdText}</p>
                            <p>{item.FourthText}</p>
                            <p>{item.FifthText}</p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
            </div>
    </div>
  )
}

export default Roadmap