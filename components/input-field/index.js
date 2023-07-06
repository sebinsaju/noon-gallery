import React from "react";
import style from "./InputField.module.scss";
import { ErrorMessage } from "formik";

const InputField = ({ name, label, id, onChange, onBlur ,props}) => {
  return (
    <div className={style.input_field}>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        className="form-control"
      />
      <div className={style.error} >
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default InputField;
