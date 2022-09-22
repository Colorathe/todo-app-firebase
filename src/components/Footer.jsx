import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='py-5 bg-gradient-to-r from-[#182747] to-[#1CB5E0] text-center text-gray-300'>
      <div class='flex text-xl md:text-2xl font-semibold mb-5 mt-2 justify-center'>
        <a
          href='https://www.linkedin.com/in/joaquinevulcano/'
          target='_blank'
          className=''
        >
          <AiFillLinkedin size={30} />
        </a>
        <a href='https://github.com/Colorathe' target='_blank' class='ml-2'>
          <AiOutlineGithub size={30} />
        </a>
      </div>
      <span class='copyright'>&copy; Desing by Joaquin Vulcano</span>
    </footer>
  );
};

export default Footer;
