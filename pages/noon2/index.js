import React from "react";
// import video from "../../public/video.mp4";
import image1 from "../../public/assets/noon2/WhatsApp Image 2022-01-09 at 5.15.38 PM.jpeg";
import image2 from "../../public/assets/noon2/Class.png";
import meetup from "../../public/assets/noon2/meetup.jpg";
import meetup2 from "../../public/assets/noon2/meetup2.jpg";

const noon2 = () => {
  return (
    <div className="container py-md-5">
      <h3 className="title-big text-center my-4">Noon Sharee&apos;a</h3>
      <section className="mb-5">
        {/* <video autoPlay loop muted>
            <source src="./video.mp4" type="video/mp4" />
        </video> */}
        <img src={image1.src} style={{ width: "100%" }} />
        <h4 className="my-4">
          &quot;The seeking of knowledge is obligatory for every Muslim.&quot; -
          Al-Tirmidhi, Hadith 74
        </h4>
        <img src={image2.src} style={{ width: "100%" }} />
        <h4 className="my-4">
          &quot;Acquire knowledge and impart it to the people.&quot; -
          Al-Tirmidhi, Hadith 107
        </h4>
      </section>
      <section>
        <h3 className="title-big text-center my-4">Madrasa MeetUp</h3>
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <img src={meetup.src} style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <img src={meetup2.src} style={{ width: "100%" }} />
          </div>
        </div>
        <h4 className="my-5">
          &apos;Not wealth, not gold, not empires, not assets. It is a good
          education that is the best gift a father can provide to his children
          &apos;
        </h4>
        <p>
          Noon Shariah is an Islamic Knowledge development and learning service.
          My academic background is in Arabic language and Islamic studies. I
          did my graduate studies at Baqiyathu Swalihath Arabic College- India.
          I am passionate about Islamic history, culture and Islamic theological
          studies. Through Noon Shariah service I aim to help others in their
          journey of Islamic knowledge discovery and development. I can assist
          you by providing the following services:
        </p>
        <ul className="my-3">
          <li>
            <strong>Translation and Tafseer of Holy Quran</strong>
          </li>
          <li>
            <strong>Tajveed and Qira’t /Recitation improvement training</strong>
          </li>
          <li>
            <strong>Arabic Language training spoken and written.</strong>
          </li>
          <li>
            <strong>Islamic Teaching (Fiqh, Hadith, Duas etc)</strong>
          </li>
        </ul>
        <p>
          A strong moral education is one of the best tools you can provide for
          your kids to help them sail smoothly along in their lives helping to
          guide them along the path of righteousness. In todays complicated
          times a strong moral foundation and cultural understanding of Islamic
          values, scriptures, history and traditions will be a great asset for
          anyone in this life as well as preparing for the hereafter.
        </p>
        <p>
          All the services are aimed at providing knowledge to both primary
          students with little awareness of the concepts they are interested as
          well as for more advanced students who have a strong foundation and
          knowledge of the topics and seek to improve it. Services are available
          for both children as well adults. The Services can be availed from
          anywhere using our online services as well through in-person
          instruction locally.
        </p>
      </section>
    </div>
  );
};

export default noon2;
