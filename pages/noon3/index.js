import React from "react";
import image1 from "../../public/assets/noon3/p1.jpg";
import image2 from "../../public/assets/noon3/unnamed (2).jpg";
import image3 from "../../public/assets/noon3/Penart.jpg";
import image4 from "../../public/assets/noon3/unnamed (1).jpg";
import image5 from "../../public/assets/noon3/wk1 (1).jpg";
import image6 from "../../public/assets/noon3/wk1 (2).jpg";
import image7 from "../../public/assets/noon3/wk1 (3).jpg";
import image8 from "../../public/assets/noon3/fffhh.jpg";
const Noon3 = () => {
  const IMAGES = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
    image7.src,
    image8.src,
  ];

  return (
    <div className="container py-md-5">
      <h3 className="title-big text-center my-4">NOON WAL-QALAM</h3>
      <p className="mb-3">
        Does beautiful hand writing catch your eye? Does observing great hand
        writing styles and calligraphy give you joy? Have you ever aspired to
        develop your own hand writing skills? Then Noon Wa Kalam is glad to be
        of assistance to you.
      </p>
      <p>
        Noon Wa Kalam is focused on providing Arabic language handwriting
        Improvement services. Training is provided on improving your hand
        writing along with helping you understand and learn new styles of
        writing Arabic script (Kufic, Nashk and Diwani styles). Arabic
        calligraphy writing training is also provided as another added services
        for those interested. Some Examples of Arabic Scripts and various
        writing styles are below
      </p>
      <div className="row my-4">{IMAGES.map((image, index) => {
        return<div className="col-6 col-md-4 col-lg-3 mb-2" key={index}>
            <img src={image} style={{width:"100%",height:"100%"}}/>
        </div>
      })}</div>
    </div>
  );
};

export default Noon3;
