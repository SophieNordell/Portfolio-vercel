import { useFormik } from "formik";
import { RxHamburgerMenu } from "react-icons/Rx";

export default function Navbar() {
  const formik = useFormik({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="">
      <div className="flex justify-between gap-12 border-b-2 p-5 text-lg ">
        <img
          className="flex rounded-3xl w-56 "
          src="/sophie-logo.png"
          alt="Logo"
        />
        <div className="flex gap-12 px-5 text-lg text-gray-600 ">
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
        </div>
      </div>
    </div>
  );
}
