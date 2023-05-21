import React from "react";
import Link from "next/dist/client/link";
const HomeAbout = () => {
  return (
    <section className="w3l-about py-5">
      <div className="container py-sm-4">
        <div className="row">
          <div className="col-lg-6 about-left mb-md-0 mb-5">
            <h3 className="title-big">
              Welcome To Noon Gallery
            </h3>
            <h5>Noon Gallery Is Your One Stop Location For A Diverse Range Of Attractive And Useful Services</h5>
            <p className="mt-3">
              My name is Maulvi Shahnavas Baqavi, (Director of Noon Gallery). I
              am an Aalim, Calligrapher as well as an Islamic studies & Arabic
              language My academic background is in Arabic language and Islamic
              studies. I did my graduate studies at Baqiyathu Swalihath Arabic
              College- India. I am passionate about the Arabic language, Islamic
              history, Quranic knowledge and Islamic studies and have studies
              these topics extensively. One of the main services I provide is
              Noon Shariah which focuses on Quranic tafseer and recitation
              training, Arabic language training, Islamic teaching (Hadith, Fiqh
              etc.) from basic primary students to advanced students for both
              children and adults. The services can be availed both Online as
              well as In-person instruction.
            </p>
            <Link href="/about">
              <a className="btn btn-style btn-primary mt-sm-5 mt-4">
                Learn About Us
              </a>
            </Link>
          </div>
          <div className="col-lg-6 about-right position-relative mt-lg-0 mt-5">
            <img
              src="/assets/33.jpg"
              alt=""
              className="img-fluid img-border mt-4"
            />
            <img
              src="/assets/99.jpg"
              alt=""
              className="img-fluid position-absolute img-position"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
