import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h1 className="text-2xl text-gray-600 font-serif font-bold mb-10 mt-10">
        Contact
      </h1>

      <div className="">
        <a href="mailto:sophie.nordell@gmail.com">
          <button className=" text-blue-400 mr-2">
            <ImMail4 size={60} />
          </button>
        </a>
        <a href="https://github.com/SophieNordell" target="_blank">
          <button className=" hover:text-slate-400 mr-2  text-gray-700">
            <FaGithub className="text-gray-950" size={60} />
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/sophie-nordell-a24a40250/"
          target="_blank"
        >
          <button className="hover:text-slate-400 text-gray-700">
            <AiFillLinkedin className="text-blue-500 mr-2" size={60} />
          </button>
        </a>

        <a href="https://www.facebook.com/sophie.nordell/" target="_blank">
          <button className="hover:text-slate-400 text-gray-700">
            <AiFillFacebook className="text-blue-900" size={60} />
          </button>
        </a>
      </div>
    </div>
  );
}
