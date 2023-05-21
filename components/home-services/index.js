import Link from "next/link";
import React from "react";
import first from "../../public/assets/55.jpg";
import second from "../../public/assets/44.jpg";
import third from "../../public/assets/33.jpg";
import fourth from "../../public/assets/99.jpg";

const HomeServices = () => {
  const DATA = [
    {
      image: first.src,
      desc: "All types of beatiful arabic calligraphy commissions including intricate stone engraving,glass etching,wood multiwood,wall designing,signage board works and seal works,arabic typing and translation.",
      title: "NOON ARTS-CALLIGRAPHY",
      link: "/noon1",
    },
    {
      image: second.src,
      desc: "Quran study including detailed quran thafseer classes,Quran reading improvement training(thajweed)and all islamic subjects ",
      title: "NOON SHAREEA",
      link: "/noon2",
    },
    {
      image: third.src,
      desc: "Arabic spoken and written language training for all ages including hand writing improvement lessons",
      title: "NOON WAL-QALAM",
      link: "/noon3",
    },
    {
      image: fourth.src,
      desc: "complete kerela tour planning services with arabic speakers including hotel booking and tour itinerary development.outdoor camping with all facilities",
      title: "NOON MUSAFIR",
      link: "/noon4",
    },
  ];
  return (
    <section className="w3l-feature-2">
      <div className="grid top-bottom py-5">
        <div className="container py-md-5">
          <h3 className="title-big text-center">
            Noon Gallery Is Your One Stop Location For A Diverse Range Of
            Attractive And Useful Services
          </h3>
          <div className="middle-section row mt-lg-5 pt-md-3">
            {DATA.map((item, index) => {
              return (
                <div
                  className="three-grids-columns col-lg-4 col-md-6 mb-4"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid image-services"
                  />
                  <div className="info">
                    <h4>
                      <a href="#url">{item.title}</a>
                    </h4>
                    <p className="services-description">{item.desc}</p>
                    <Link href={item.link}>
                      <a className="btn mt-4">Read More </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
