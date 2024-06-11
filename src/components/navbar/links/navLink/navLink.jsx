"use client";

import Link from "next/link";
import s from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${s.container} ${pathName === item.path && s.active}`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
