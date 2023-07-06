import { ErrorMessage, Formik } from "formik";
import React from "react";
import InputField from "../../components/input-field";
import * as Yup from "yup";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { useForm, ValidationError } from "@formspree/react";
const Register = () => {

  const [state, handleSubmit] = useForm("xeqbqoob");

  const INITIALVALUES = {
    first_name: "",
    last_name: "",
    street_address: "",
    street_address_line2: "",
    city: "",
    state: "",
    zip_code: "",
    gender: "",
    days: "",
    parent_name: "",
    parent_number: "",
    parent_work_place: "",
    parent_email: "",
    wap_first_name: "",
    wap_last_name: "",
    wap_number: "",
    wap_number_secondary: "",
    class_level: "",
    comment: "",
  };

  const VALIDATION = Yup.object().shape({
    first_name: Yup.string().required("Enter first name"),
    last_name: Yup.string().required("Enter last name"),
    street_address: Yup.string().required("Enter Street Address"),
    street_address_line2: Yup.string(),
    city: Yup.string().required("Enter city"),
    state: Yup.string().required("Enter state"),
    zip_code: Yup.number("Enter valid number").required("Enter zip code"),
    gender: Yup.string().required("Select Gender"),
    days: Yup.array().required("Select Days"),
    parent_name: Yup.string().required("Enter Parent name"),
    parent_number: Yup.string().required("Enter Phone number"),
    parent_work_place: Yup.string().required("Enter Place of work "),
    parent_email: Yup.string().required("Enter Email address"),
    wap_first_name: Yup.string().required("Enter First name"),
    wap_last_name: Yup.string().required("Enter Last name"),
    wap_number: Yup.number("Enter valid number").required("Enter Primary phone number"),
    wap_number_secondary: Yup.number("Enter valid number").required("Enter Secondary phone number"),
    class_level: Yup.array().required("Enter Class Level"),
  });

  if (state.succeeded) {
    return (
      <div
        style={{
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Thanks for registering!</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-5">
      <h3 className="title-big text-center my-4">
        Noon Sharee&apos;a Online Madrassa Registration
      </h3>

      <Formik
        initialValues={INITIALVALUES}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="pb-5">
            <div className="row">
              <div className="col-12">
                <h3 className="register_title">Child&apos;s Information</h3>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="first_name"
                  label="First Name"
                  id="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="First Name"
                  value={values.first_name}
                />
                <ValidationError
                  prefix="first_name"
                  field="first_name"
                  errors={state.errors}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="last_name"
                  label="Last Name"
                  id="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  value={values.last_name}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="street_address"
                  label="Street Address"
                  id="street_address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.street_address}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="street_address_line2"
                  label="Street Address Line 2"
                  id="street_address_line2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.street_address_line2}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="city"
                  label="City"
                  id="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <InputField
                  name="state"
                  label="State"
                  id="state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <InputField
                  name="zip_code"
                  label="Zip Code"
                  id="zip_code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zip_code}
                />
              </div>
              <div className="col-12 mb-3">
                <label style={{ display: "block" }}>Male or Female?</label>
                <label htmlFor="female" style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    value="Female"
                    id="female"
                    name="gender"
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label htmlFor="male">
                  <input
                    type="radio"
                    value="Male"
                    id="male"
                    name="gender"
                    onChange={handleChange}
                  />
                  Male
                </label>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="gender" />
                </div>
              </div>
              <div className="col-12">
                <label>
                  Hours of Madrassa required (Madrassa hours are 7:00 am to
                  10:00 pm)
                </label>
                <div>
                  <label style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      name="days"
                      value="Sunday"
                      onChange={handleChange}
                    />
                    Sunday
                  </label>
                  <label style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      name="days"
                      value="Monday"
                      onChange={handleChange}
                    />
                    Monday
                  </label>
                  <label style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      name="days"
                      value="Tuesday"
                      onChange={handleChange}
                    />
                    Tuesday
                  </label>
                  <label style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      name="days"
                      value="Wednesday"
                      onChange={handleChange}
                    />
                    Wednesday
                  </label>
                  <label style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      name="days"
                      value="Thursday"
                      onChange={handleChange}
                    />
                    Thursday
                  </label>
                  <label style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      name="days"
                      value="Saturday"
                      onChange={handleChange}
                    />
                    Saturday
                  </label>
                </div>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="days" />
                </div>
              </div>
              <div className="col-12 mb-3">
                <h3 className="register_title">Parent&apos;s Information</h3>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="parent_name"
                  value={values.parent_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Parent's/Guardian's name"
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="parent_number"
                  value={values.parent_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Phone number"
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="parent_work_place"
                  value={values.parent_work_place}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Place of work"
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="parent_email"
                  value={values.parent_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email address"
                />
              </div>
              <div className="col-12 mb-3">
                <h3 className="register_title">WhatsApp Contact</h3>
                <label>
                  For Sharing Madrassa Notes , Links and Time schedule, please
                  contact:
                </label>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="wap_first_name"
                  value={values.wap_first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="First name"
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="wap_last_name"
                  value={values.wap_last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Last name"
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="wap_number"
                  value={values.wap_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Primary phone number"
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <InputField
                  name="wap_number_secondary"
                  value={values.wap_number_secondary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Secondary phone number"
                />
              </div>
              <div className="col-12 mb-3">
                <h3 className="register_title">Class level of join</h3>
                <label>Class Level</label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-1"
                    onChange={handleChange}
                  />
                  Level-1-(Basic)
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-2"
                    onChange={handleChange}
                  />
                  Level-2
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-3"
                    onChange={handleChange}
                  />
                  Level-3
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-4"
                    onChange={handleChange}
                  />
                  Level-4
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-5"
                    onChange={handleChange}
                  />
                  Level-5
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-6"
                    onChange={handleChange}
                  />
                  Level-6
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="Level-7"
                    onChange={handleChange}
                  />
                  Level-7
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name="class_level"
                    value="General Level"
                    onChange={handleChange}
                  />
                  General Level
                </label>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="class_level" />
                </div>
              </div>
              <div className="col-12">
                <label style={{ display: "block" }}>Comments & concerns.</label>
                <textarea
                  name="comment"
                  value={values.comment}
                  onChange={handleChange}
                  style={{ width: "100%", minHeight: "100px" }}
                />
              </div>
            </div>
            <button className="btn btn-contact">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
