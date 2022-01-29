import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const formRef = useRef();
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  // function to change setUserInfo
  const handleChange = (event) => {
    // curly braces to spread userInfo
    // grabbing value of target.name
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    if (!userInfo.user_name) {
      setFormMessage("Username is required");
    } else if (!userInfo.user_subject) {
      setFormMessage("A subject is required");
    } else if (!userInfo.user_email) {
      setFormMessage("An email address is required");
    } else if (!userInfo.message) {
      setFormMessage("A message is required");
    } else {
      setFormMessage("");
    }
  };

  //   function using emailjs to send email messages to my personal email address
  const sendEmail = (event) => {
    event.preventDefault();
    if (!validateEmail(userInfo.user_email)) {
      setFormMessage("Your email is invalid.");
      setUserInfo({
        user_name: "",
        user_subject: "",
        user_email: "",
        message: "",
      });
      return;
    } else {
      setFormMessage("");
    }

    emailjs
      .sendForm(
        "service_00h9vrq",
        "template_arlhmpa",
        formRef.current,
        "user_NXi2YqwrBa1FKxtgiWMO3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormMessage(
            "Your email message was submitted. We will reply as soon as possible."
          );
          setUserInfo({
            user_name: "",
            user_subject: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <p>
          Contact Us
          <br />
          We will reply to you as soon as possible
        </p>
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            value={userInfo.user_name}
            onChange={(event) => handleChange(event)}
            type="text"
            placeholder="Your name"
            name="user_name"
          />
          <input
            value={userInfo.user_subject}
            onChange={(event) => handleChange(event)}
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <input
            value={userInfo.user_email}
            onChange={(event) => handleChange(event)}
            type="text"
            placeholder="Your email address"
            name="user_email"
          />
          <textarea
            value={userInfo.message}
            onChange={(event) => handleChange(event)}
            rows="5"
            placeholder="Type your message"
            name="message"
          />
          <div>
            {/* if formMessage is true, go ahead and render <p> tag */}
            {formMessage && <p className="form-message">{formMessage}</p>}
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
