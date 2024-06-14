import Link from "next/link";
import Links from "./links/Links";
import s from "./NavBar.module.css";
import { auth } from "@/lib/auth";

const NavBar = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className={s.container}>
      <Link href="/" className={s.logo}>
        Logo
      </Link>
      <Links session={session} />
    </div>
  );
};

export default NavBar;
