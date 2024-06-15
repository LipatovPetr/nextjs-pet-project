import LoginForm from "@/components/loginForm/loginForm";
import { handleGitHubLogin } from "@/lib/action";
import s from "./login.module.css";

const LoginPage = async () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <LoginForm />
        <form action={handleGitHubLogin}>
          <button className={s.github}>Login with GitHub</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
