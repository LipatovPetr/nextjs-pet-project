import Image from "next/image";
import s from "./home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h1 className={s.title}>Creactive Thoughts Agency</h1>
        <p className={s.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
        </p>
        <div className={s.buttons}>
          <button className={s.button}>Learn More</button>
          <button className={s.button}>Contact</button>
        </div>
        <div className={s.brands}>
          <Image src="/brands.png" alt="" fill className={s.brandImg} />
        </div>
      </div>

      <div className={s.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={s.heroImg} />
      </div>
    </div>
  );
};

export default Home;
