import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h2>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 ">
            <Link to={"/"} className="btn btn-secondary">
              back to home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h3 className="text-center font-bold text-4xl ">
        Some thing went wrong...
      </h3>

      <Link to={"/"} className="btn btn-primary">
        back to home
      </Link>
    </main>
  );
};

export default Error;
