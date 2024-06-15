import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

import s from "./navBar.module.css";

const NavBar = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className={s.container}>
      <Link href="/" className={s.logo}>
        PetrDev
      </Link>
      <Links session={session} />
    </div>
  );
};

export default NavBar;
