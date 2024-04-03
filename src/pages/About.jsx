import { AiOutlineStar } from "react-icons/ai"; // Tom stjärna
import { AiFillStar } from "react-icons/ai"; // Fylld stjärna

import React from "react";

export default function About() {
  return (
    <div className="md:flex justify-center p-3 md:p-16  bg-[#8F9779] font-nunito">
      <div className=" flex flex-col items-center rounded-xl p-4 md:ml-10 bg-[#8F9779]">
        <p className="text-2xl text-slate-300 font-bold p-5 mb-10">About me</p>

        <div>
          <div className="flex justify-center items-center p-4 md:p-16  border-[#4D5D53] border-2 shadow-xl mb-10 ">
            <section className="text-slate-300 text-xl md:overflow-y-auto pt-4  leading-8 w-fit">
              My name is Sophie, i am a 32-year-old frontend developer with a
              passion for creating user-friendly and innovative digital
              experiences. <br /> My journey into the IT world began with a
              strong drive to realize my dream of working in the technology
              sector. In addition to my work in coding and design, I spend my
              free time with friends, immerse myself in literature, and enjoy
              playing video games.
              <br /> <br /> I am enthusiastic about the opportunity to continue
              growing and learning in frontend development and look forward to
              participating in exciting projects and challenges in the future.
            </section>
          </div>

          <div className=" flex flex-col">
            <h1 className=" pt-10 text-xl font-serif text-gray-300 border-b-2 mb-4  ">
              Language
            </h1>
            <p className="text-lg text-gray-300">Swedish</p>
            <p className="flex flex-row text-xl text-orange-300  ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p className="text-lg text-gray-300">English</p>
            <p className="flex flex-row text-xl text-orange-300 ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
