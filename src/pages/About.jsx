import { AiOutlineStar } from "react-icons/ai"; // Tom stjärna
import { AiFillStar } from "react-icons/ai"; // Fylld stjärna

import React from "react";

export default function About() {
  return (
    <div className="md:flex justify-center p-16 bg-[#8F9779]">
      <div>
        <div className=" border border-slate-700 w-fit h-fit flex flex-col items-center rounded-xl p-3 shadow-lg bg-[#4D5D53]">
          <p className="text-xl text-slate-300 font-bold pb-10">About me</p>
          <div>
            <ul className="text-slate-300">
              <li>* I am 31 years old</li>
              <li>* Studied to become a preschool teacher in high school. </li>
              <li>* I love to play videogames in my spare time.</li>
              <li>* I love to read.</li>
              <li>
                * Right now im studying to become a Frontend developer at Chas
                Academy in Stockholm, Sweden.
              </li>
            </ul>
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
    </div>
  );
}
