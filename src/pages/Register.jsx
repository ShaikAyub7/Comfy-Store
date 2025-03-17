import React from "react";
import { Link, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type={"text"}
          label={"username"}
          name={"username"}
          defaultValue={"Azra fathima"}
        />
        <FormInput type={"email"} label={"email"} name={"email"} />
        <FormInput type={"password"} label={"password"} name={"password"} />
        <div className=" mt-4">
          <SubmitBtn text={"Register"} />
        </div>
        {/* <button type="button" className="btn btn-secondary btn-block">
          Guest User
        </button> */}
        <p className="text-center">
          Already a member ?{" "}
          <Link
            to={"/login"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
