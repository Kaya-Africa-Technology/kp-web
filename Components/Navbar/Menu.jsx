import { HiChevronDown } from "react-icons/hi2";
import Link
 from "next/link";
export default function Menu({ scroll, menu }) {
  return (
    <>
      {menu.name === "Services" ? (
        <li className="flex items-center">
          <Link href={`${menu.path}`} className="mr-2">
            {menu.name}
          </Link>
          <HiChevronDown
            className={
              scroll
                ? "font-bold cursor-pointer text-md md:text-secondary md:font-normal"
                : "font-bold cursor-pointer text-md text-primary md:font-normal"
            }
          />
        </li>
      ) : (
        <li>
          <Link href={`${menu.path}`}>{menu.name}</Link>
        </li>
      )}
    </>
  );
}
