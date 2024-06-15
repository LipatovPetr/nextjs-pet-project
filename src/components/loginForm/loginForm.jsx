"use client";

import { useFormState } from "react-dom";
import s from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state, router]);

  return (
    <form className={s.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
    </form>
  );
};

export default LoginForm;
