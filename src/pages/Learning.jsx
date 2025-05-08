import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";

export default function Learning() {
  const icons = [
    {
      id: "js",
      icon: <TbBrandJavascript className="text-yellow-500" size={65} />,
    },
    { id: "react", icon: <GrReactjs className="text-blue-400" size={65} /> },
    {
      id: "tailwind",
      icon: <SiTailwindcss className="text-blue-500" size={65} />,
    },
    { id: "next", icon: <SiNextdotjs className="text-black" size={65} /> },
    { id: "css", icon: <DiCss3 className="text-indigo-500" size={65} /> },
    { id: "html", icon: <AiFillHtml5 className="text-orange-600" size={65} /> },
    {
      id: "typescript",
      icon: <SiTypescript className="text-blue-500" size={65} />,
    },
    {
      id: "figma",
      icon: (
        <img src="figma1.avif" alt="figma icon" className="h-16 rounded-md" />
      ),
    },
  ];

  return (
    <div className="pt-16 bg-[#4D5D53] mx-auto font-nunito border-b border-slate-700 pb-16 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-36 w-max">
        {[...icons, ...icons].map(({ id, icon }, index) => (
          <div key={`${id}-${index}`} className="flex-shrink-0">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
