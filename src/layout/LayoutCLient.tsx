import React from "react";
import { Outlet, Routes } from "react-router-dom";
import Header from "../component/client/header";

const LayoutCLient = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutCLient;
