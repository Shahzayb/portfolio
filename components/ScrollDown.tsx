import React from 'react';
import { MdKeyboardArrowDown as ArrowDown } from 'react-icons/md';

function ScrollDown() {
  return (
    <button
      className="focus:outline-none"
      onClick={() => {
        document
          .getElementById('project-section')
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <ArrowDown size="45" />
    </button>
  );
}

export default ScrollDown;
