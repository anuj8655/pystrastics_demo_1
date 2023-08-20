import React from "react";
import Appoinment from "../../../Pages/Home/Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import Detail from "../Detail/Detail";
import Safety from "../Safety/Safety";
import Header from "../../Home/Header/Header";

const Service = () => {
  return (
    <>
      <Header />
      <Banner />
      <Detail />
      {/* <Safety /> */}
      <Appoinment />
    </>
  );
};

export default Service;
