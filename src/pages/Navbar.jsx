import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center border-b-2 p-5 text-lg bg-[#4D5D53] border-slate-700">
      <img
        className="md:flex rounded-3xl w-56 sm:hidden"
        src="/sophie-logo.png"
        alt="Logo"
      />
      <div className="flex gap-12 px-5 text-lg text-white">
        <a href="#projects" className="hover:text-gray-300">
          My projects
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact me
        </a>
        <button className="md:hidden">
          <RxHamburgerMenu size={25} />
        </button>
      </div>
    </div>
  );
}
