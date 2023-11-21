/* import { RxHamburgerMenu } from "react-icons/rx"; */

export default function Navbar() {
  return (
    <div className="flex justify-between border-b-2 border-b- p-2 text-lg bg-[#4D5D53] border-slate-700 ">
      <img
        className="flex rounded-3xl w-56  "
        src="/sophie-logo.png"
        alt="Logo"
      />
      {/* <div className="flex gap-12 px-5 text-lg text-gray-600 ">
         <button className=" text-gray-600 hover:text-gray-300">Home</button>

          <button className="hover:text-gray-300 text-gray-600">
            About me
          </button>

          <button className="hover:text-gray-300 text-gray-600">
            Projects
          </button>

          <button className="hover:text-gray-300 text-gray-600">Contact</button>

          <button className="md:hidden">
            <RxHamburgerMenu size={25} />
          </button> 
      </div>  */}
    </div>
  );
}
