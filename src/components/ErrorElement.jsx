import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div className="grid align-element">
      <h4 className="text-4xl font-bold">There Was an Error ....</h4>
    </div>
  );
};

export default ErrorElement;
