import React from "react";
import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiFlutter,
} from "react-icons/si";

function Skills() {
  return (
    <div className="mx-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center font-bold pt-4 sm:text-4xl">
        Tech I Use
      </p>
      <div className="flex flex-wrap pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <FaReact color="blue" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <SiDjango color="green" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Django
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <SiMongodb color="#3FA037" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            MongoDB
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <SiExpress color="#68a063" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            ExpressJs
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <FaNodeJs color="#68a063" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            NodeJs
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <SiTailwindcss
            color="teal"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            TailwindCss
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <FaAws color="#FF9900" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            AWS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <SiJavascript
            color="#323330"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            JavaScript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <FaPython color="orange" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Python
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white showdow-2xl rounded-xl sm:w-52 ">
          <SiFlutter color="#2196f3" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Flutter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
