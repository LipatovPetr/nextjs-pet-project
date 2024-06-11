import s from "./footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>petrdev</div>
      <div className={s.text}>
        Petr Creative Thoughts Agency. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
