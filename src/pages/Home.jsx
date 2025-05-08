"use client";

import { useState, useEffect } from "react";
import { FaFileDownload, FaLaptopCode } from "react-icons/fa";
import { MdBrush } from "react-icons/md";
import { GrGrow } from "react-icons/gr";

export default function Home() {
  const [text, setText] = useState("");
  const name = "Hello, I am Sophie Nordell";
  const speed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(name.slice(0, index));
      index++;
      if (index > name.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-monserrat">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/window.webp')",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#8F9779]/70 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-around min-h-screen px-4 py-16 gap-y-10 md:gap-y-0">
        <div className="bg-gradient-to-tr from-[#4D5D53] to-[#6e7b6e] p-2 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 md:translate-y-[-30px]">
          <img
            src="/sophie.jpg"
            alt="Photo of me"
            width={300}
            height={300}
            className="rounded-full object-cover w-52 h-56 md:w-64 md:h-64 ring-4 ring-white drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-md md:max-w-3xl px-4 pt-16 md:pt-0">
          <h1 className="font-bold text-3xl md:text-3xl font-serif text-white mb-2 min-h-[72px] md:min-h-[96px] whitespace-nowrap overflow-hidden drop-shadow-lg">
            {text}
          </h1>

          <p className="font-medium text-base md:text-xl text-gray-100 leading-relaxed mt-6 md:mt-0 drop-shadow">
            I’m a trained frontend developer{" "}
            <FaLaptopCode className="inline ml-1 align-middle text-xl text-purple-700" />{" "}
            currently expanding my skills through UX/UI{" "}
            <MdBrush className="inline align-middle text-xl text-yellow-400" />{" "}
            design studies. I’m passionate about learning and love exploring how
            design and development work together to create seamless, meaningful
            user experiences. I’m excited to start working in a field where I
            can keep growing and be creative.{" "}
            <GrGrow className="inline align-middle text-amber-800" />
          </p>

          <a
            href="sophiecv.png"
            download="sophiecv.png"
            className="mt-16 mb-16 text-lg inline-flex leading-relaxed items-center gap-2 py-3 drop-shadow px-10 border border-[#4D5D53] rounded-full bg-[#4D5D53] text-gray-100 hover:bg-[#6e7b6e] hover:text-white transition-colors duration-300"
          >
            Download my resume <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
}
