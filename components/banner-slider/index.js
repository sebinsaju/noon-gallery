import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { instance } from "../../axios";
const BannerSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("banners").then((res)=>{setData(res.data.banners)})
  }, []);
  const DATA = [
    { image: "/assets/1.jpg", text: "" },
    { image: "/assets/2.jpg", text: "" },
    { image: "/assets/3.jpg", text: "" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
        {console.log(data)}
      <Slider {...settings}>
        {DATA.map((slide, index) => {
          return (
            <div className="banner-slide" key={index}>
              <img src={slide.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
