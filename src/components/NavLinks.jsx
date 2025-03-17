import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <>
      {" "}
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"cart"}>Cart</NavLink>
      </li>
      <li>
        <NavLink to={"checkout"}>Checkout</NavLink>
      </li>
      <li>
        <NavLink to={"orders"}>Orders</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
