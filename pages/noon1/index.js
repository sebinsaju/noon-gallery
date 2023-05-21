import React from "react";
import image1 from "../../public/assets/noon1/noon1a.jpg";
import image2 from "../../public/assets/noon1/noon1b.png";
import image3 from "../../public/assets/noon1/noon1c.jpg";
import image4 from "../../public/assets/noon1/noon1d.jpg";
import image5 from "../../public/assets/noon1/nooo3.jpg";
import image6 from "../../public/assets/noon1/no4.png";
import image7 from "../../public/assets/noon1/no5.jpg";
import image8 from "../../public/assets/noon1/no6.jpg";

import image10 from "../../public/assets/noon1/cc1.png";
import image11 from "../../public/assets/noon1/cc2.png";
import image12 from "../../public/assets/noon1/cc3.png";
import image13 from "../../public/assets/noon1/cc4.png";
import image14 from "../../public/assets/noon1/cc5.png";
import image15 from "../../public/assets/noon1/cc6.png";
import image16 from "../../public/assets/noon1/c2a.png";
import image17 from "../../public/assets/noon1/c2b.png";
import image18 from "../../public/assets/noon1/c2c.jpg";
import image19 from "../../public/assets/noon1/c2d.jpg";
import image20 from "../../public/assets/noon1/c2e.jpg";

import image21 from "../../public/assets/noon1/handca.jpg";
import image22 from "../../public/assets/noon1/abdul.jpeg";
import image23 from "../../public/assets/noon1/raeesa.jpeg";
import image24 from "../../public/assets/noon1/Nizam & Jasna.jpeg";

import image25 from "../../public/assets/noon1/wedcalli.jpg";
import image26 from "../../public/assets/noon1/handcalli2.jpg";

import image27 from "../../public/assets/noon1/we1.jpg";
import image28 from "../../public/assets/noon1/we2.jpg";
import image29 from "../../public/assets/noon1/we3.jpg";
import image30 from "../../public/assets/noon1/we4.jpg";
import image31 from "../../public/assets/noon1/we5.jpg";
import image32 from "../../public/assets/noon1/we6.jpg";



import Link from "next/link";

const Noon1 = () => {
  const SECTION1 = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
    image7.src,
    image8.src,
  ];

  const SECTION2 = [
    image10.src,
    image11.src,
    image12.src,
    image13.src,
    image14.src,
    image15.src,
    image16.src,
    image17.src,
    image18.src,
    image19.src,
    image20.src,
  ];

  const SECTION3 = [image21.src, image22.src, image23.src, image24.src];

  const SECTION4 = [
    image25.src,
    image26.src,
  ]

  const SECTON5 =[
    image27.src,
    image28.src,
    image29.src,
    image30.src,
    image31.src,
    image32.src,
  ]

  return (
    <div className="container py-md-5">
      <h3 className="title-big text-center my-4">NOON ARTS-CALLIGRAPHY</h3>
      <h4 className="mb-4">Art Commission:</h4>
      <section className="mb-5">
        <h5 className="mb-3">What is Arabic Calligraphy?</h5>
        <p>
          Arabic script calligraphy is the art of beautiful writing, using the
          letters of the Arabic alphabet. This art form is also known as Islamic
          calligraphy, because it was first developed to write the Quran—the
          holy book of Islam. Calligraphy is one of the highest forms of visual
          art in the Islamic world. Today, this art form is practiced and
          enjoyed by people from many different countries and religions. There
          are many different styles of Arabic calligraphy.
        </p>
      </section>
      <section className="mb-5">
        <h5 className="mb-3">How can I help you?</h5>
        <p className="mb-4">
          I practice traditional and contemporary Arabic calligraphy, and do
          custom calligraphy design on stone, walls, paper and digital mediums
          for original pieces, weddings, homes, mosques, plaques, headstones and
          more. All my work is hand-written and crafted, I also use computer
          fonts in my designs. I scan the finished product into CorelDRAW, where
          it can be turned into a vectorized transparency so your artists can
          drop it in seamlessly with very little editing required on your end.
          If you need Arabic calligraphy-related graphic design, Stone
          engraving, Glass etching works, Wood/Multiwood design, Metal Design,
          Sticker works, Flex design, Name Boards, logo work, branding, or other
          calligraphic and design elements for your product, I am happy to help.
          Here are a few things I&apos;ve been working on lately.
        </p>
        <div className="row">
          {SECTION1.map((image, index) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <img
                  src={image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="mb-3">Stone Engraving</h5>
        <p>
          Elaborate calligraphic designs in Arabic scripts as well other designs
          etched onto stone such as marble, granite etc, beautiful wall carving
          designs, inauguration plaque, Headstones etc.
        </p>
        <p className="mb-4">
          I normally ship the work unframed. Shipping is free nearest my
          location (I’m based in Idukki, Kerala.) Worldwide shipping as well as
          framing is available upon customer request.
        </p>
        <div className="row">
          {SECTION2.map((image, index) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <img
                  src={image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>
        <p className="mt-5">
          The engraving project process usually takes about a week. Please
          contact me at{" "}
          <Link href="mailto:shah@noongallery.com">shah@noongallery.com</Link>{" "}
          or by WhatsApp <Link href="tel:+91 9744763712">(+91 9744763712)</Link>{" "}
          to get started on your project.
        </p>
      </section>

      <section className="mb-5">
        <h5 className="mb-3">Original Hand calligraphy</h5>
        <p className="mb-4">
          If you are interested in commissioning a piece of original calligraphy
          either for yourself or as a gift, I would be happy to work with you on
          the design. You can either request a customized piece of calligraphy
          or browse my currently available works. (Al Asma Ul Husna , Ayath Ul
          Quran etc.)
        </p>
        <div className="row">
          {SECTION3.map((image, index) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <img
                  src={image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="mb-3">Calligraphy for a wedding</h5>
        <p className="mb-4">
          If you&apos;re looking for calligraphy for a wedding as wedding memento
          either to be used as a logo on the invitations or as a gift for the
          bride and groom, I do a logo-type design of the bride and groom&apos;s
          first names intertwined, and then send you a Photoshop or CorelDRAW
          transparency that you can take to your designer and use for whatever
          you want - invitations, handouts at the wedding, napkins and other
          printed materials, or to be used as a gobo to be projected onto the
          stage background or onto walls of an outdoor night venue. I would love
          to work with you on it. I charge a flat fee of ........ for this. I am
          willing to redesign the piece as many times as you would like, until
          the image fits perfectly with the vision you had for the wedding.
        </p>
        <p className="mb-2">
        This is something I do quite regularly, and it usually takes one of two forms:
        </p>
        <div className="row">
          {SECTION4.map((image, index) => {
            return (
              <div className="col-12 col-lg-6" key={index}>
                <img
                  src={image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="mb-3">Other calligraphy Works</h5>
        <div className="row">
          {SECTON5.map((image, index) => {
            return (
              <div className="col-12 col-lg-4" key={index}>
                <img
                  src={image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>


    </div>
  );
};

export default Noon1;
