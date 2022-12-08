import React from "react";
import NavOutLineButton from "../Common/NavOutLineButton";
import NavFillButton from "../Common/NavFillButton";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

function Header() {
    
  return (
    <div className="bg-image">
        <Navbar />
        <Banner />
    </div>
  );
}

export default Header;
