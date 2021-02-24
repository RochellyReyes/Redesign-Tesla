import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../Styling/slider.css";
import Slider from "react-slick";

//images for slider
const photos = [
    {
        alt: "Red Tesla",
        image: "../img/sliderImages/AWD_hero@2.jpg"
    },
    {
        alt: "Insid of a Tesla",
        image: "../img/sliderImages/bram-van-oost-4xM5cytsdMo-unsplash.jpg"
    },
    {
        alt: "Solar Roof",
        image: "../img/sliderImages/solar-roof_design_D.jpg"
    },
    {
        alt: "Tesla Key Card",
        image: "../img/sliderImages/manny-becerra-JCUk_yGAKWo-unsplash.jpg"
    },
    {
        alt: "Tesla at Night",
        image: "../img/sliderImages/jannes-glas-87royqk4t6o-unsplash.jpg"
    },
    {
        alt: "Solar Panels",
        image: "../img/sliderImages/D_solarpanels_hero_2880x1800_20201120.jpg"
    }
]


class ImageSlider extends Component {
  render() {
    const settings = {
    // dots: true,
      fade: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: "slider"
    };
    return (
      <div>
        <Slider {...settings}>
          {photos.map((pic=>{
              return (<div>
                  <img src={pic.image} alt={pic.alt} />
              </div>
              )
          }))}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider