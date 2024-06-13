import Link from "next/link";
import Links from "./links/Links";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={s.container}>
      <Link href="/" className={s.logo}>
        Logo
      </Link>
      <Links />
    </div>
  );
};

export default NavBar;
