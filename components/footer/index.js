import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6 col-sm-8 footer-list-29 footer-1">
                <h6 className="footer-title-29">Contact Us</h6>
                <ul>
                  <li>
                    <p>
                      <span className="fa fa-map-marker"></span> An Islamic
                      cultural shoppe India-Qatar
                    </p>
                  </li>
                  <li>
                    <Link href="tel:+974 55849648">
                      <a>
                        <span className="fa fa-phone"></span>  +974 55849648
                      </a>
                    </Link>
                    <br />
                    <Link href="tel:+91 9744763712">
                      <a>+91 9744763712</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:shah@noongallery.com">
                      <a className="mail">
                        <span className="fa fa-envelope-open-o"></span>
                        shah@noongallery.com
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-4 footer-list-29 footer-2 mt-sm-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Useful Links</h6>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a> Servies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-sm-5 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 className="footer-title-29">Latest from blog</h6>
                                <div className="footer-post mb-4">
                                    <a href="#url">Work Passionately</a>
                                    <p className="small"><span className="fa fa-clock-o"></span> March 9, 2020</p>
                                </div>
                                <div className="footer-post">
                                    <a href="#url">Work Passionately without any hesitation</a>
                                    <p className="small"><span className="fa fa-clock-o"></span> March 9, 2020</p>
                                </div>

                            </div> */}
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Newsletter </h6>
                <p>
                  Enter your email and receive the latest news from us. We will
                  never share your email address
                </p>

                <form action="#" className="subscribe" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                  <button>
                    <span className="fa fa-envelope-o"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-footer-29-main w3l-copyright">
        <div className="container">
          <div className="row bottom-copies">
            <p className="col-lg-8 copy-footer-29">
              © 2023 Noon Gallery. All rights reserved
            </p>
            {/* <div className="col-lg-4 main-social-footer-29">
                           <Link target="_blank" href="https://www.facebook.com/radiantresort17"> <a className="facebook" ><span className="fa fa-facebook"></span></a></Link>
                           <Link target="_blank"  href="https://twitter.com/radiant_resort">  <a className="twitter" ><span className="fa fa-twitter"></span></a></Link>
                           <Link target="_blank" href="https://www.instagram.com/resortradiant/"> <a className="instagram" ><span className="fa fa-instagram"></span></a></Link>
                           <Link target="_blank"  href="https://web.whatsapp.com/send?phone=+918088887777"><a className="whatsapp"><span className="fa fa-whatsapp" ></span></a></Link>
                        </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
