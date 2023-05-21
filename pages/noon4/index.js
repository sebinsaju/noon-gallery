import React from "react";
import image1 from "../../public/assets/noon4/travel (4).jpg";
import image2 from "../../public/assets/noon4/travel (1).png";
import image3 from "../../public/assets/noon4/tra.jpg";
import image4 from "../../public/assets/noon4/travel (2).jpg";
import image5 from "../../public/assets/noon4/travel (3).jpg";
import image6 from "../../public/assets/noon4/travel (5).jpg";
import image7 from "../../public/assets/noon4/tra.jpg";
import image8 from "../../public/assets/noon4/travel.jpg";

const Noon4 = () => {
  const IMAGES = [
    image3.src,
    image4.src,
    image5.src,
    image6.src,
    image7.src,
    image8.src,
  ];

  return (
    <div className="container py-md-5">
      <h3 className="title-big text-center my-4">NOON MUSAFIR</h3>
      <p className="mb-4">
        Noon Musafir is a complete tour and travelling planning service for
        journeys to Kerala with focus on needs and cultural requirements of
        middle eastern customers along with language translator services.
      </p>
      <img src={image1.src} style={{ width: "100%" }} className="mb-4" />
      <img src={image2.src} style={{ width: "100%" }} className="mb-4" />
      <div className="row">
        {IMAGES.map((image, index) => {
          return (
            <div className="col-6 mb-3" key={index}>
              <img src={image} style={{ width: "100%" }}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Noon4;
