"use client";

import { useFormState } from "react-dom";
import s from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state, router]);

  return (
    <form className={s.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="email" name="email" />
      <input type="text" placeholder="password" name="password" />
      <input type="text" placeholder="password again" name="passwordRepeat" />
      <button>Register</button>
      {state?.error}
    </form>
  );
};

export default RegisterForm;
