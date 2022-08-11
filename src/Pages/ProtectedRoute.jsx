import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

function ProtectedRoute() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;