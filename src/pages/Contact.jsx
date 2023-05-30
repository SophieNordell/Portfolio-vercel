import { useFormik } from "formik";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      formname: "",
      email: "",
      message: "",
    },
  });

  console.log(formik.values);
  return (
    <div className="flex flex-col items-center bg-gray-100 p-16">
      {/* <div className="border border-gray-600 pt-5 rounded-xl bg-white mt-10 p-32 shadow-md ">
        <div className=" flex justify-center">
          <h1 className="flex text-xl font-serif p-10">Contact me here!</h1>
        </div>

        <div className="">
          <form action="/send-data-here" method="post">
            <div className="flex flex-col justify-center mb-5">
              <label className="text-gray-800 ml-3" htmlFor="name">
                Name:
              </label>
              <input
                placeholder="Enter your name.."
                className="border border-gray-600 ml-3 rounded-md"
                type="text"
                value={formik.values.formname}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col justify-center mb-6">
              <label className="text-gray-800 ml-3" htmlFor="email">
                Email:
              </label>
              <input
                placeholder="Enter your email.."
                id="email"
                className="border border-gray-700 ml-3 rounded-md"
                type="email"
              />
            </div>
            <div className="relative w-28">
              <img src="message.avif" alt="" />
            </div>
            <div className=" flex justify-center p-4 flex-col">
              <label
                className="text-gray-700 border-gray-700"
                htmlFor="massage"
              >
                Message me here:
              </label>

              <textarea
                className="border"
                name=""
                id="massage"
                cols="35"
                rows="5"
              ></textarea>
            </div>
            <div className=" flex justify-center">
              <button
                className="border px-2 rounded hover:bg-slate-200 shadow-md font-serif text-gray-600 "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}

      <h1 className="text-2xl text-gray-600 font-serif font-bold p-5 ">
        Contact me
      </h1>

      <div>
        <a href="mailto:sophie.nordell@gmail.com">
          <button className="mr-5 text-blue-400">
            <ImMail4 size={60} />
          </button>
        </a>
        <a href="https://github.com/SophieNordell" target="_blank">
          <button className="mt-10 hover:text-slate-400 mr-5 text-gray-700">
            <FaGithub className="text-gray-950" size={60} />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/sophie-nordell-a24a40250/"
          target="_blank"
        >
          <button className="hover:text-slate-400 mr-5 text-gray-700">
            <AiFillLinkedin className="text-blue-500" size={60} />
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
