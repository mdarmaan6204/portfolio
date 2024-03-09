import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  TEMPLATE_ID_EMAIL,
  SERVICE_ID_EMAIL,
  PUBLIC_KEY_EMAIL,
} from "../utilis/constant";
import Dark from "../utilis/Dark";
import Alert from "@mui/material/Alert";

export const Contact = () => {
  const form = useRef();
  const [showMsgDiv, setShowMsgDiv] = useState(false);
  const mode = useContext(Dark);

  const dark = mode.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    setShowMsgDiv(true);
    console.log(form.current);
    emailjs
      .sendForm(SERVICE_ID_EMAIL, TEMPLATE_ID_EMAIL, form.current, {
        publicKey: PUBLIC_KEY_EMAIL,
      })
      .then(
        () => {},
        (error) => {}
      );
    e.target.reset();
  };

  return (
    <div className={`${dark && "dark"}`}>
      <div className="dark:bg-slate-900 -mt-2">
        <div className="pt-4">
          {showMsgDiv && (
            <Alert
              variant="filled"
              severity="success"
              className="w-1/2 mx-auto"
            >
              SUCCESSFULLY SENT
            </Alert>
          )}
        </div>
        <div className="md:py-10">
          <div className="dark:bg-white-800 rounded-xl  md:w-5/12 w-11/12 mx-auto shadow-xl bg-teal-200 hover:bg-teal-300">
            <form ref={form} onSubmit={sendEmail} className="py-8">
              <label className="m-8 text-xl font-bold">
                Name : </label>
              <input
                type="text"
                name="from_name"
                className="md:mx-8 mx-9 rounded-lg md:my-10 my-4 md:w-96 w-52 h-12 border border-black p-4 hover:border-2 hover:bg-slate-100 font-medium font-serif"
                required
              />
              <br />
              <label className="m-8 text-xl font-bold ">
                Email : </label>
              <input
                type="email"
                name="from_email"
                className="md:mx-8 mx-10 rounded-lg md:my-10 my-4 md:w-96 w-52 h-12 border border-black p-4 hover:border-2 hover:bg-slate-100 font-medium font-serif"
                required
              />
              <br/>
              <label className="m-8 text-xl font-bold">
                Phone : </label>
                <br/>
              <input
                type="number"
                name="from_mob"
                className="md:mx-8 mx-12 rounded-lg md:my-10 my-4 md:w-96 w-52 h-12 border border-black p-4 hover:border-2 hover:bg-slate-100 font-medium font-serif"
                required
              />
              <br />
              <div className="md:flex justify-items-center">
                <label className="m-4 p-4 text-xl font-bold ">Message: </label>
                <textarea
                  name="message"
                  className="mx-8 rounded-lg mb-10 md:mt-0 mt-4 md:w-96 w-72 md:h-40 h-52 border border-black p-4 hover:border-2 hover:bg-slate-100 font-medium font-serif"
                  placeholder="Write your message..."
                  required
                />
              </div>
              <br />
              <input
                type="submit"
                value="SEND"
                className="font-extrabold font-serif rounded-lg mb-4 hover:scale-110 w-20 h-12 md:mx-72 mx-52 border-black  bg-blue-400 border hover:bg-blue-600"
              />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
