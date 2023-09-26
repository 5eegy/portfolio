import React, { forwardRef } from "react";
import { Heading } from "../Others/Heading";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="-mt-4 pb-12 font-neue">
      <Heading head="CONTACT" position="left" />
      <a
        href="mailto:segunowo247@gmail.com"
        target="_blank"
        className="block text-2xl mt-5 mx-3 opacity-40 underline underline-offset-4 w-1/3 py-3"
      >
       SEHGY MAIL
      </a>

      <div className="text-left mt-2 w-2/3 opacity-60 px-3">
        <a
          href="https://github.com/sehgy"
          target="_blank"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          github
        </a>

        <a
          target="_blank"
          href="https://linkedin.com/in/segunowo"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          linkedin
        </a>

        <a
          target="_blank"
          href="https://twitter.com/sehgy_"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          twitter
        </a>

        <a
          target="_blank"
          href="https://sehgy.medium.com"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
          medium
        </a>

        <a
          target="_blank"
          href="https://dev.to/sehgy"
          className="inline-block border m-1 p-1 w-20  text-xl bg-black rounded-lg hover: text-center"
        >
         devto
        </a>
      </div>

      <p className="text-xl opacity-30 text-center my-8">&copy; SEEGO 2023</p>
    </div>
  );
});

export default Contact;
