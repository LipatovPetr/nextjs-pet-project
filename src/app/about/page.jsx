import Image from "next/image";
import s from "./about.module.css";
const About = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.subtitle}>About Agency</h2>
        <h1 className={s.title}>
          We creat ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={s.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
        </p>
        <div className={s.boxes}>
          <div className={s.box}>
            <h3>10k</h3>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h3>10k</h3>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h3>10k</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={s.imageContainer}>
        <Image className={s.image} src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default About;
