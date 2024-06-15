import s from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
