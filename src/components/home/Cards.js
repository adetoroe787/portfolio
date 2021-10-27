import React from "react";
import profile from "../images/image.png";
import Social from "./Social";

export { profile };

function Cards() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl px-5 ">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Ezekiel Adetoro</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            React Django Full-Stack Developer
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Cards;
