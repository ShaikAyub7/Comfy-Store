import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Hero, Navbar } from "../components";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
