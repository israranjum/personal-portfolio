import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-wrap justify-center items-center pt-36 sm:pt-0">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets Build Somthing Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5] developer-name">Israr</span>
          </h1>
          <h1 className="py-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto ">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex item-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 bg-blue-700 ">
              <FaLinkedinIn className="text-white " />
            </div>
            <Link href={"https://github.com/israranjum"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 bg-black">
                <FaGithub className="text-white " />
              </div>
            </Link>
            <Link href={"mailto:suna6781@gmail.com"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 bg-red-500 ">
                <AiOutlineMail className="text-white" />
              </div>
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 bg-green-600">
              <BsFillPersonLinesFill className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
