import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const RoutesLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RoutesLayout;
