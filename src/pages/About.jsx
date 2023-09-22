import { AiOutlineStar } from "react-icons/ai"; // Tom stjärna
import { AiFillStar } from "react-icons/ai"; // Fylld stjärna

import React from "react";

export default function About() {
  return (
    <div className="md:flex justify-center p-16">
      <div>
        <div className=" border border-gray-300 w-fit h-fit flex flex-col items-center rounded-xl p-3 shadow-lg bg-gray-100 ">
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
