export default function Projects() {
  return (
    <div className="relative text-center p-10 bg-[#4D5D53]">
      <h1 className="text-2xl text-gray-300 font-serif font-bold">
        To see some of my projects,{" "}
        <span className="border-b-2 text-slate-400 hover:text-slate-500 ">
          {" "}
          click
        </span>{" "}
        on a photo!
      </h1>
      <div className="flex mt-10 justify-center gap-5 ">
        <a href="https://reusable-components-topaz.vercel.app/" target="_blank">
          <div className=" rounded-xl ">
            <img
              className=" w-11/12 "
              src="ReusableComponents.png"
              alt="ProjectComponents"
            />
          </div>
          <div className="p-3">
            <h1 className="font-serif text-xl text-gray-300">
              Reusable Components
            </h1>
            <p className="text-gray-300 mt-5">
              {" "}
              Using: JavaScript, Html, Tailwind, React
            </p>
          </div>
        </a>
        <a href="https://zoom-redesign-pi.vercel.app/" target="_blank">
          <div className="rounded-xl shadow-lg">
            <img className="w-11/12" src="Zoom.png" alt="projectZoom" />
          </div>

          <div className="p-3">
            <h1 className="font-serif text-gray-300 text-xl">Zoom redesign</h1>

            <p className="text-gray-300 mt-5">
              Using: JavaScript, Html, tailwind, React text-lg
            </p>
          </div>
        </a>
        <a href="https://radio-player-react-blond.vercel.app/" target="_blank">
          <div className="rounded-xl shadow-lg">
            <img className="w-11/12" src="RadioPlayer.png" alt="Radio" />
          </div>
          <div className="p-3">
            <h1 className="font-serif text-gray-300 text-xl">Radio Project</h1>

            <p className="text-gray-300 mt-5">
              {" "}
              Using: React, fetching API, tailwind, html, javaScript
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
