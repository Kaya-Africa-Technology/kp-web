import { HiChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({ scroll, menu }) {
  const router = useRouter();
  console.log(router.asPath)
  
  return (
    <>
      {menu.name === "Services" ? (
        <li className="flex items-center">
          <Link
            href={`${menu.path}`}
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
        <li>
          <Link
            href={`${menu.path}`}
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
