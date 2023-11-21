import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

//bg-gray-100

export default function Learning() {
  return (
    <div className="pt-10 bg-[#4D5D53]">
      <img className="absolute w-full " src="confetti1.gif" alt="confetti" />
      <h1 className="text-center text-2xl text-gray-300 mb-9  font-bold font-serif ">
        Currently learning
      </h1>

      <div className="flex justify-center">
        <div className="md:flex gap-5 mb-10 mr-10">
          {/* ------------------------JavaScript---------------------------------- */}

          <TbBrandJavascript className="text-yellow-500" size={65} />

          {/* --------------------------REACTJS------------------------------------- */}

          <GrReactjs className="text-blue-400" size={65} />

          {/*  -------------------------TAILWIND------------------------------ */}

          <SiTailwindcss className="text-blue-500" size={65} />

          {/*  --------------------------NEXT-------------------------------- */}
          <SiNextdotjs className=" text-black" size={65} />
        </div>
        <div className="md:flex gap-5 mb-10 mr-10">
          {/* .---------------------------CSS---------------------------------- */}

          <DiCss3 className="text-indigo-500" size={65} />

          {/*-------------------------------- HTML-------------------------------- */}

          <AiFillHtml5 className="text-orange-600" size={65} />

          {/*  --------------------------Redux--------------------------------- */}
          <SiRedux className="text-purple-800" size={65} />

          {/* -------------------------typeScript-------------------------------- */}
          <SiTypescript className="text-blue-500" size={65} />
        </div>
      </div>
    </div>
  );
}
