import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pb-[63rem] sm:pb-96">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
