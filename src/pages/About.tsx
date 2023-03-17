import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen flex item-center pt-20">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-8 pt-10 items-center">
        <div className="cols-span-2">
          <p className="uppercase tracking-widest text-xl text-[#5651e5]  px-2 sm:px-0 md:px-0">
            About Us
          </p>
          <h2 className="py-4 px-2 sm:px-0 md:px-0">Who I am</h2>
          <p className="py-2 text-gray-600 px-2 sm:px-0 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            facilis veritatis expedita illo, dolores nam at eligendi explicabo
            officia velit et veniam vitae porro in. Possimus, debitis eligendi.
            Reiciendis deserunt illum fugit asperiores, sapiente voluptate
            molestias recusandae rerum quibusdam quod cumque doloremque magni at
            laudantium sint nostrum neque dolor vel. Molestias, quis. Molestiae
            quaerat quidem cumque dicta fuga, quos labore odio eligendi saepe
            unde commodi provident aliquid sapiente. Laboriosam quas distinctio
            praesentium expedita numquam esse cum illum. Aspernatur natus
            aperiam illo repellat, velit facilis explicabo quibusdam vero
            mollitia, aut dolor dolore. Magnam rerum, deleniti eligendi in
            aperiam numquam commodi inventore!
          </p>
        </div>
        <div>
          <Image
            src={"/About.jpg"}
            height={"100"}
            width={"200"}
            alt="About Image"
            className="rounded w-64 h-auto m-auto shadow-xl shadow-gray-400 items-center justify-center flex p-4 hover:scale-105 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
