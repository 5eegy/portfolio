import React, { useEffect, useState } from "react";


const Topinfo = () => {
  const [time, setTime] = useState(new Date());
  // const [sec, setSec] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
      // setSec(!sec)
    }, 1000);
  });

  return (
    <div className="flex fixed top-0 left-0 w-full p-2 bg-black z-[1000]">
      <div className="w-1/2 text-sm flex">
        <p className="w-8 text-xl flex justify-start items-center cursor-pointer">&#x2630;</p>
        {/* <p>&#x2613;</p> */}
        <div className="flex flex-col">
          <h3 className="text-sm">Seego</h3>
          <h3 className="text-sm">Frontendr</h3>
        </div>
      </div>


      <div className="w-1/2 text-right">
        <p className="text-xs">
          {time.getDate() +
            ":" +
            (time.getMonth() + 1) +
            ":" +
            time.getFullYear()}
        </p>
        <p className="text-xs">
          {time.getHours() >= 12 ? time.getHours() - 12 : time.getHours()}
          {/* {sec ? ":" : " "} */}
          {":"+time.getMinutes()}
          {time.getHours() >= 0 ? " PM" : " AM"}
        </p>
      </div>
    </div>
  );
};

export default Topinfo;
