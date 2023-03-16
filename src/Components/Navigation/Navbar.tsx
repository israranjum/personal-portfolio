import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src="" width="125" height="50" alt="/"/> */}
        <h2>Logo Here</h2>
        {/* Header Menu Start here */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {/* Header Menu End here */}
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[80%] sm:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500  px-4 pt-5 "
              : "fixed left-[-100%] top-0  ease-in duration-500 p-10"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2>Logo Here</h2>
              {/* <Image src="/" alt="Logo Image" width="87" height="35"/> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {" "}
                Lets Build Somthing legengary together
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm uppercase">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets's Connect
              </p>
              <div className="flex justify-between my-4 w-full sm:w-[75%]   md:w-[70%] flex-w ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
