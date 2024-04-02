import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { phone } from "./Phone";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_izfbq4l",
        "template_4e89kis",
        formRef.current,
        "0yAQ45n1DHpMf1Js1"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="contact" id="contact"
      >
      <motion.div 
        className="textContainer" 
        variants={variants}
        viewport={{ once: true }}
        whileInView="animate"
        initial="initial"
        ref={ref}
        >
        <motion.h1 variants={variants}>Lets work</motion.h1>
        <motion.h1 variants={variants}>Together..</motion.h1>
        <motion.div className="item" variants={variants}>
          <p>
            <FaEnvelope />
            E-Mail
          </p>
          <span>abhishek.kr.11511@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <p>
            <FaLocationDot />
            Location
          </p>
          <span>Earth 🌏</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <p>
            {" "}
            <FaPhone />
            Phone
          </p>
          <span>+91-9931469541</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 150 }}
              transition={{ duration: 250 }}
              d={phone}
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Email Sent to Abhishek 😀"}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
