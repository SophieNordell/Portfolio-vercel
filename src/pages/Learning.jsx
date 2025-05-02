import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";

export default function Learning() {
  const icons = [
    <TbBrandJavascript className="text-yellow-500" size={65} />,
    <GrReactjs className="text-blue-400" size={65} />,
    <SiTailwindcss className="text-blue-500" size={65} />,
    <SiNextdotjs className="text-black" size={65} />,
    <DiCss3 className="text-indigo-500" size={65} />,
    <AiFillHtml5 className="text-orange-600" size={65} />,
    <SiTypescript className="text-blue-500" size={65} />,
    <FaFigma
      className="text-black
    "
      size={65}
    />,
  ];

  return (
    <div className="pt-16 bg-[#4D5D53] mx-auto font-nunito border-b border-slate-700 pb-10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-36 w-max">
        {[...icons, ...icons].map((icon, i) => (
          <div key={i} className="flex-shrink-0">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
