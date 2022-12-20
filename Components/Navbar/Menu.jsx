import { HiChevronDown } from "react-icons/hi2";
import Link from "next/link";

export default function Menu({ scroll, menu }) {
  return (
    <>
      {menu.name === "Services" ? (
        <li className="flex items-center">
          <Link href={`${menu.path}`} className="mr-2 text-secondary">
            {menu.name}
          </Link>
          <HiChevronDown
            className={
              scroll
                ? "font-bold cursor-pointer text-md md:text-secondary md:font-normal"
                : "font-bold cursor-pointer text-md text-secondary md:font-normal"
            }
          />
        </li>
      ) : (
        <li>
          <Link href={`${menu.path}`} className="text-secondary">{menu.name}</Link>
        </li>
      )}
    </>
  );
}
