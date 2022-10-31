import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
        <h1 className="text-5xl font-extrabold">Contact.</h1>

        <div className="pt-5 pb-12 text-gray-500">
          <span>
            Get in touch or send me an email directly on
            <span className="font-semibold"> ble6@fordham.edu </span>
          </span>
        </div>

        <div className="">
          <form className="grid grid-flow-row space-y-5 py-2 w-full md:w-1/2">
            <input
              className="rounded-md border-[1px] w-full h-14 indent-5"
              placeholder="Name"
              required
            ></input>

            <input
              className="rounded-md border-[1px] w-full h-14 indent-5"
              placeholder="Email"
              required
            ></input>

            <textarea
              className="rounded-md border-[1px] w-full h-32 textAreaContact indent-5 py-5"
              placeholder="Message"
              required
            ></textarea>
            <button className="w-1/2 bg-black h-14 text-white rounded-md font-extralight text-sm">
                Send Message
            </button>
          </form>
        </div>

        <div className="pt-12 flex space-x-3 cursor-pointer">
          <p className="text-black text-md hover:underline">Go back home</p>
          <div className="rotate-90 ">
            <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
