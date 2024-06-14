import { register } from "@/lib/action";
import s from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <form className={s.form} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="password" name="password" />
          <input
            type="text"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
