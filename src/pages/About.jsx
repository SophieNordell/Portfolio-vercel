import { AiOutlineStar } from "react-icons/ai"; // Tom stjärna
import { AiFillStar } from "react-icons/ai"; // Fylld stjärna
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import React from "react";

export default function About() {
  return (
    <div className="flex justify-center bg-gray-100 p-16">
      <div>
        <h1 className="text-center text-2xl text-gray-600 mb-9 font-bold font-serif">
          Currently learning
        </h1>
        <div className="flex gap-5">
          {/* ------------------------JavaScript---------------------------------- */}
          <div>
            <TbBrandJavascript className="text-yellow-500" size={65} />
          </div>

          {/* --------------------------REACTJS------------------------------------- */}
          <div>
            <GrReactjs className="text-blue-400" size={65} />
          </div>

          {/*  -------------------------TAILWIND------------------------------ */}
          <div className="mb-16">
            <SiTailwindcss className="text-blue-500" size={65} />
          </div>

          {/*  --------------------------NEXT-------------------------------- */}
          <div>
            <SiNextdotjs className=" text-black" size={65} />
          </div>
          {/* .---------------------------CSS---------------------------------- */}
          <div>
            <DiCss3 className="text-indigo-500" size={65} />
          </div>
          {/*-------------------------------- HTML-------------------------------- */}
          <div>
            <AiFillHtml5 className="text-orange-600" size={65} />
          </div>
          <div>
            {/*  --------------------------Redux--------------------------------- */}
            <SiRedux className="text-purple-800" size={65} />
          </div>
          <div>
            {/* -------------------------typeScript-------------------------------- */}
            <SiTypescript className="text-blue-500" size={65} />
          </div>
        </div>

        <div className=" border border-gray-300 w-fit h-fit flex flex-col items-center rounded-xl p-3 shadow-lg bg-white ">
          <p className="text-xl text-orange-500 border-b border-gray-500 font-serif font-bold">
            About me
          </p>
          <div>
            <ul>
              <li>* I am 31 years old</li>
              <li>* Studied to become a preschool teacher in high school. </li>
              <li>* I love to play videogames in my spare time.</li>
              <li>* I love to read.</li>
              <li>
                * Right now im studying to become a frontend developer at Chas
                Academy in Stockholm, Sweden..
              </li>
            </ul>
            <div className=" flex flex-col">
              <h1 className=" pt-10 text-xl font-serif text-gray-600 border-b-2 mb-4  ">
                Language
              </h1>
              <p className="text-lg text-gray-700">Swedish</p>
              <p className="flex flex-row text-xl text-orange-300  ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="text-lg text-gray-700">English</p>
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
    </div>
  );
}
