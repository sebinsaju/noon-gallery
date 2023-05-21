import React from "react";

const Register = () => {
  return (
    <div className="container py-5">
      <h3 className="title-big text-center my-4">
        Noon Sharee&apos;a Online Madrassa Registration
      </h3>
      <form>
        <h4 className="mb-4">Child&apos;s Information</h4>
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="First Name"
              required=""
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="Last Name"
              required=""
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="Street address"
              required=""
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="Street address line 2"
              required=""
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="City"
              required=""
            />
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="State"
              required=""
            />
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <input
              type="text"
              className="form-control"
              name="w3lName"
              id="w3lName"
              placeholder="Zip code"
              required=""
            />
          </div>
        </div>
        <h4>Male or female?</h4>
        <input type="radio" name="gender" id="male" />
        {/* <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label> */}
        <br></br>
      </form>
    </div>
  );
};

export default Register;
