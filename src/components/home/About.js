import React from "react";
import ScrollDown from "./ScrollDown";



function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey! 👋
      </p>
      <p className="text-base ms:text-xl text-center text-gray-600 leading-relaxed mt-4">
        I am a Full-Stack web and mobile developer. I love to freelance and work
        in a team. I love creating content on my blog about web and app
        development.
      </p>
      <ScrollDown />
    </div>
  );
}

export default About;
