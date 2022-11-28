import { ArrowUpIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tnemf9",
        "template_sxituza",
        form.current,
        "hJyfDNCcmW7lTYk0d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10 mb-40">
        <h1 className="text-5xl font-extrabold">Contact.</h1>

        <div className="pt-5 pb-12 text-gray-500">
          <span>
            Get in touch or send me an email directly on
            <span className="text-black font-semibold">
              {" "}
              lehoangbach7802@gmail.com{" "}
            </span>
          </span>
        </div>
        <div className="">
          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            className="grid grid-flow-row space-y-5 py-2 w-full md:w-1/2"
          >
            <input
              className="rounded-md border-[1px] w-full h-14 indent-5"
              placeholder="Name"
              name="user_name"
              required
            ></input>

            <input
              className="rounded-md border-[1px] w-full h-14 indent-5"
              placeholder="Email"
              name="user_email"
              required
            ></input>

            <textarea
              className="rounded-md border-[1px] w-full h-32 textAreaContact indent-5 py-5"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button
              className="w-1/2 bg-black h-14 text-white rounded-md font-extralight text-sm"
              type="submit"
              value="Send"
            >
              Send Message
            </button>
          </form>
        </div>

        <Link to="/">
          <div className="pt-12 flex space-x-3 cursor-pointer">
            <p className="text-black text-md hover:underline">Go back home</p>
            <div className="rotate-90 ">
              <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
            </div>
          </div>
        </Link>

        <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 pt-14 pb-20">
          <Footer />
        </div>
      </div>
    </m.div>
  );
}

export default Contact;
