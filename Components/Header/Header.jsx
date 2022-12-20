import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();
    
    
  return (
    <div className={`${router.asPath === '/' && "bg-image"} `}>
        <Navbar />
        {router.asPath === '/' && <Banner />}
    </div>
  );
}

export default Header;
