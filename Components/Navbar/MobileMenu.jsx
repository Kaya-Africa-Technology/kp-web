import React from 'react'
import { HiChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

function MobileMenu({ scroll, menu, index, closeMobileMenu }) {
    const router = useRouter();
    
    return (
      <>
        {menu.name === "Services" ? (
          <li className="flex items-center" key={index}>
            <Link
              href={menu.path.toString()}
              // className={`${router.asPath === "/" ? 'text-secondary' : 'text-primary'} ${scroll ? 'text-primary' : 'text-primary'} mr-2`}
              className={`mr-2 ${router.asPath !== "/" ? "text-secondary" : scroll ? "text-secondary" : "lg:text-primary"}`}
            >
              {menu.name}
            </Link>
            <HiChevronDown
              className={`${
                router.asPath !== "/" ? "text-secondary" : scroll ? "text-secondary" : "lg:text-primary"
              } cursor-pointer`}
            />
          </li>
        ) : (
          <li key={index}>
            <Link
              href={menu.path.toString()}
              onClick={() => closeMobileMenu()}
              // className={`${router.asPath !== "/" ? 'text-secondary' : "text-primary"} ${scroll ? 'text-secondary' : "text-primary"}`}
              className={`${router.asPath !== "/" ? "text-secondary" : scroll ? "text-secondary" : "lg:text-primary"}`}
            >
              {menu.name}
            </Link>
          </li>
        )}
      </>
    );
}

export default MobileMenu