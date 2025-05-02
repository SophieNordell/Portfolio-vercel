import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-5 text-lg bg-[#4D5D53] border-b-2 border-slate-700">
      <img
        className="md:flex rounded-3xl w-56 sm:hidden"
        src="/sophie-logo.png"
        alt="Logo"
      />

      <div className="hidden md:flex gap-12 px-5 text-lg text-white">
        <a href="#projects" className="hover:text-gray-300">
          My projects
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact me
        </a>
      </div>

      {/* Hamburgermenyn för mobiler */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        <RxHamburgerMenu size={25} />
      </button>

      {/* Mobilmeny */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 right-0 left-0 bg-[#4D5D53] p-5 text-white shadow-lg`}
      >
        {/* Stängningsknappen för menyn */}
        <div className="flex justify-end">
          <button onClick={closeMenu} className="text-white text-2xl">
            X
          </button>
        </div>

        <div className="flex flex-col items-center ">
          <a
            href="#projects"
            className="block py-2 hover:text-gray-300 cursor-pointer"
            onClick={closeMenu}
          >
            My projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-gray-300 cursor-auto"
            onClick={closeMenu}
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}
