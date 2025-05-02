"use client";
import { useState, useEffect } from "react";

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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around bg-[#8F9779] border-b-2 border-slate-700 text-white px-4 py-8 md:py-16">
      <div className="hidden md:block bg-[#4D5D53] md:p-8 rounded-lg shadow-xl">
        <img
          className="rounded-full shadow-2xl"
          src="sophie.jpg"
          alt="Photo of me"
          width={250}
          height={250}
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-3xl">
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
          className="mt-4 md:mt-6 inline-block px-4 py-2.5 border border-[#4D5D53] rounded-full bg-[#4D5D53] text-gray-100 hover:bg-white hover:text-[#4D5D53] transition-colors duration-300"
        >
          Download my resume
        </a>
      </div>
    </div>
  );
}
