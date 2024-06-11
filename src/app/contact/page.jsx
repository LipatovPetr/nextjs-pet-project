import Image from "next/image";
import s from "./contact.module.css";

const Contact = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image className={s.image} src="/contact.png" alt="" fill />
      </div>
      <div className={s.formContainer}>
        <form action="" className={s.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
