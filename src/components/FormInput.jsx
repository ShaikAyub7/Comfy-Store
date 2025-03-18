import React from "react";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input
          type={type}
          className={`input input-bordered ${size}`}
          placeholder="Type here"
          name={name}
          defaultValue={defaultValue}
        />
      </fieldset>
    </div>
  );
};

export default FormInput;
