import React from "react";

const Contact = () => {
  return (
    <div>
      <p className="text-yellow-400 text-base">{"<CONTACT/>"}</p>
      <a href="https://github.com/segowo" target="_blank" className="text-blue-400 block mt-2 underline">
        {" <github/>"}
      </a>

      <a href="https://linkedin.com/in/segowo" target="_blank" className="text-blue-400 block mt-2 underline">
        {" <linkedin/>"}
      </a>

      <a href="https://twitter.com/seego" target="_blank" className="text-blue-400 block mt-2 underline">
        {" <twitter/>"}
      </a>

      <a href="https://dev.to/segow" target="_blank" className="text-blue-400 block mt-2 underline">
        {" <devto/>"}
      </a>


      <a href="mailto:segunowo247@gmail.com" target="_blank" className="text-blue-400 block mt-2 underline">
        {" <email/>"}
      </a>
    </div>
  );
};

export default Contact;
