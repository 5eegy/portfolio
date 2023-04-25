import React, { forwardRef } from "react";
import { Heading } from "../Others/Heading";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="-mt-4 pb-12 font-neue">
      <Heading head="CONTACT" position="left" />
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
          target="_blank"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          github
        </a>

        <a
          target="_blank"
          href="https://linkedin.com/in/mrseego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          linkedin
        </a>

        <a
          target="_blank"
          href="https://twitter.com/seego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          twitter
        </a>

        <a
          target="_blank"
          href="https://medium/seego"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          medium
        </a>
      </div>

      <p className="text-xl opacity-30 text-center my-8">&copy; SEEGO 2023</p>
    </div>
  );
});

export default Contact;
