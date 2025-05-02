"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="font-monserrat min-h-screen flex flex-col md:flex-row items-center justify-around bg-[#8F9779] border-b-2 border-slate-700 text-white  ">
      <div className="bg-gradient-to-tr from-[#4D5D53] to-[#6e7b6e] p-2 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 md:translate-y-[-30px]">
        <Image
          src="/sophie.jpg"
          alt="Photo of me"
          width={256}
          height={256}
          className="rounded-full object-cover w-52 h-52 md:w-64 md:h-64 ring-4 ring-white drop-shadow-lg"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-3xl ">
        <h1 className="font-bold text-3xl md:text-5xl font-serif text-white mb-2 md:mb-4 min-h-[72px] md:min-h-[96px] whitespace-nowrap overflow-hidden">
          {text}
        </h1>

        <p className="font-medium text-base md:text-xl text-gray-100 leading-relaxed mt-6 md:mt-3">
          I’m a trained frontend developer currently studying UX/UI design to
          broaden my skillset and create more user-centered, intuitive
          experiences.
        </p>

        <a
          href="sophiecv.png"
          download="sophiecv.png"
          className="mt-4 md:mt-6 text-lg inline-block py-3 px-5 border border-[#4D5D53] rounded-full bg-[#4D5D53] text-gray-100 hover:bg-white hover:text-[#4D5D53] transition-colors duration-300"
        >
          Download my resume
        </a>
      </div>
    </div>
  );
}
