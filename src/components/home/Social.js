import React from 'react';
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitterSquare,
    FaEnvelope,
  } from "react-icons/fa";

function Social() {
    return (
        <div>
            <div className="flex align-center justify-center mt-5">
            <a
              className="text-xl m-1 p-1 sm:p-2 text-gray-600 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/adetoroe787"
              target="_blank"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:p-2 text-blue-800 hover:bg-blue-300 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/ezekieladetoro/"
              target="_blank"
            >
              <FaLinkedinIn />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:p-2 text-blue-500 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://twitter.com/zestcoder"
              target="_blank"
            >
              <FaTwitterSquare />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:p-2 text-green-900 hover:bg-green-400 rounded-full hover:green-200 transition-colors duration-300"
              href="mailto:adetoroe787@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
              <span className="sr-only">EMail</span>
            </a>
          </div>
        </div>
    )
}

export default  Social
