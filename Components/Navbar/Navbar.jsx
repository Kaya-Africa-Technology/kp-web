import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MenuItems } from "../../utils/menuItems";
import Menu from "./Menu";
import NavOutLineButton from "../Common/NavOutLineButton";
import NavFillButton from "../Common/NavFillButton";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleScroll = () => {
    window.scrollY >= 70 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <div className={`${scroll ? "navbar" :   "navbar-transparent"}`}>
        <div className="navbar-container">
          <Link href="/">
            <img src="/logo.png" alt="" height="50" width="50" />
          </Link>
          <button onClick={toggleNavMenu}>
            {navMenu ? (
              <RxCross2 className="toggle-btn-x" />
            ) : (
              <RxHamburgerMenu className="toggle-btn-x" />
            )}
          </button>
          {/* desktop menu */}
          <ul className={scroll ? "menu-container-scroll" : "menu-container"}>
            {MenuItems.map((menu, index) => {
              return <Menu menu={menu} key={index} scroll={scroll} />;
            })}
          </ul>
          {/* buttons */}
          <div className="items-center justify-between hidden md:flex md:space-x-5 md:text-primary">
            <NavOutLineButton link="auth/signin" text="Sign In" scroll={scroll} />
            <NavFillButton link="auth/signup" text="Get Started" scroll={scroll} />
          </div>
        </div>
        {/* mobile menu */}
        <ul
          className={`${
            navMenu ? "menu-toggle-in " : "menu-toggle-out "
          } menu-container-mobile`}
        >
          {MenuItems.map((menu, index) => {
            return <Menu menu={menu} key={index} scroll={scroll} />;
          })}
          <a href="#" className="w-32 px-5 py-2 text-center border rounded bg-primary border-secondary text-secondary">SIGN IN</a>
          <a href="#" className="w-32 px-5 py-2 text-center rounded bg-secondary text-primary">SIGN UP</a>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
