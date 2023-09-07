import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com", "_blank")
          }
          className='black_btn'
        >
          JPs Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles by<br className='max-md:hidden' />
        <span className='orange_gradient '> JPs QuantumAI</span>
      </h1>
      <h2 className='desc'>
      Discover the efficiency of JPs QuantumAI, an open-source article summarizer designed to simplify your reading. Transform lengthy articles into clear and concise summaries effortlessly with JPs QuantumAI.  </h2>
    </header>
  );
};

export default Hero;