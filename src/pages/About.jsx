import { AiOutlineStar } from "react-icons/ai"; // Tom stjärna
import { AiFillStar } from "react-icons/ai"; // Fylld stjärna

import React from "react";

export default function About() {
  return (
    <div className="md:flex justify-center p-16 bg-[#8F9779] font-nunito">
      <div>
        <div className=" flex flex-col items-center rounded-xl p-3 md:ml-10 bg-[#8F9779]">
          <p className="text-2xl text-slate-300 font-bold pb-10 mb-10">
            About me
          </p>

          <div>
            <div className="text-slate-300 text-lg text-nunito flex flex-col">
              <li className="mb-6">
                My name is Sophie Nordell and im 31 years old
              </li>
              <li className="mb-6">
                I am Currently studying to become a frontend developer as Chas
                Academy in Stockholm.
              </li>
              <li className="mb-6"> I love to read</li>
              <li> In my spare time I love to play videogames. </li>
            </div>
            <ul className="text-slate-300 font-semibold text-lg mb-4 sm: hidden text-nunito">
              <li className="flex items-center gap-2 mb-4">
                <AiFillStar /> I am 31 years old
              </li>
              <li className="flex items-center gap-2 mb-4">
                <AiFillStar /> Studied to become a preschool teacher in high
                school.{" "}
              </li>
              <li className="flex items-center gap-2 mb-4">
                <AiFillStar /> I love to play videogames in my spare time.
              </li>
              <li className="flex items-center gap-2 mb-4">
                <AiFillStar /> I love to read.
              </li>
              <li className="flex items-center gap-2 mb-4">
                <AiFillStar /> Right now im studying to become a Frontend
                developer at Chas Academy in Stockholm, Sweden.
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
