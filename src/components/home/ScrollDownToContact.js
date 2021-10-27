import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from 'react-scroll-into-view';



function ScrollDownToContact() {
    return (
        <div>
            <ScrollIntoView selector="#contact">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
        </div>
    )
}

export default ScrollDownToContact