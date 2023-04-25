import React from "react";
import Image from "../../assets/gifs/200w.gif";
import Image2 from "../../assets/gifs/C78.gif";
import Laff from "../../assets/gifs/laff.gif";

const Break = () => {
  return (
    <h1 className="w-full text-8xl lg:text-9xl py-20 font-neue px-3 border-b border-white border-opacity-20 text-opacity-50 text-white">
      <span>
        POPC
        <img
          className="w-16 h-16 rounded-full inline border-2  border-white"
          src={Image2}
          alt="cruise"
        />
        RN
        <br></br>
      </span>{" "}
      <span className="">
        AND<br></br>
      </span>
      <span>
        DRINKS{" "}
        <img
          className="w-16 h-16 rounded-full inline"
          src={Image}
          alt="cruise"
        />
        <br></br>
      </span>{" "}
      <span className="">
        FOR YOU<br></br>
      </span>
      <span className="">
        L
        <img
          className="w-16 h-16 rounded-full inline"
          src={Laff}
          alt="cruise"
        />
        L<br></br>
      </span>
    </h1>
  );
};

export default Break;
