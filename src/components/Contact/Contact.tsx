import React from "react";
import { Heading } from "../Others/Heading";

const Contact = () => {
  return (
    <div className="-mt-4 pb-12 font-neue">
      <Heading head="CONTACT" position="left"/>
      <a
        href="mailto:segunowo247@gmail.com"
        target="_blank"
        className="block text-2xl mt-5 mx-3 opacity-40"
      >
        SegunOwo247@gmail.com
      </a>

      <div className="text-left mt-2 w-2/3 opacity-60 px-3">
        <a
          href="https://github.com/mrseego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          github
        </a>

        <a
          href="https://linkedin.com/in/mrseego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          linkedin
        </a>

        <a
          href="https://twitter.com/seego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          twitter
        </a>

        <a
          href="https://medium/seego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          medium
        </a>
      </div>

      <p className="text-xl opacity-30 text-center my-8">&copy; SEEGO 2023</p>
    </div>
  );
};

export default Contact;
