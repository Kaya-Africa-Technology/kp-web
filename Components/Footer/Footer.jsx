import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="border-b border-gray/10 bg-[#F8F8F8] py-7 mt-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-start justify-between w-full space-y-10 lg:space-y-0 lg:flex-row">
            <div>
              <img
                src="/logo.png"
                alt=""
                height="50"
                width="50"
                className="mb-7"
              />
              <p className="mb-5 text-base text-gray w-80">
                Fill out the form and our team will respond within 24 hours.
              </p>

              <div className="flex pb-5 gap-7">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </div>
            </div>
            <div className="">
              <h1 className="mb-5 text-lg font-bold text-darkGray">Services</h1>
              <ul>
                <li className="mb-3 text-base font-medium cursor-pointer text-gray text-md">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">About</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">FAQs</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Mutual Funds</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Fixed deposits</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="mb-5 text-lg font-bold text-darkGray">Company</h1>
              <ul>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">About</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Pricing</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Careers</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Press & Media</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="mb-5 text-lg font-bold text-darkGray">Support</h1>
              <ul>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Contact</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Support Portals</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">List Of Charges</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Downloads & Resources</a>
                </li>
                <li className="mb-3 text-base cursor-pointer text-md text-gray">
                  <a href="#" className="hover:text-darkGray hover:underline-offset-1 hover:underline">Videos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-col items-center justify-center bg-[#F8F8F8] p-5 text-center">
        <h1 className="font-bold text-md text-gray">
          © 2022 Kayapay. All Rights Reserved.{" "}
        </h1>
      </div>
    </>
  );
}

export default Footer;
