import React from "react";
import Link from "next/dist/client/link";
import { bookingLink } from "../../constants";
const Quotation = () => {
  return (
    <div className="quotation py-5">
      <div className="container py-xl-5 py-lg-3">
        <div className="welcome-left text-center py-md-5 py-3">
          <h3>Noon Sharee&apos;a Online Madrassa Registration</h3>
          <a
            className="btn btn-style transparent-btn mt-sm-5 mt-4 mr-2 text-white"
            target="_blank"
            rel="noreferrer"
            href={bookingLink}
          >
            Register Now
          </a>
          <Link href="/contact">
            <a className="btn btn-style btn-primary mt-sm-5 mt-4 text-white">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Quotation;
