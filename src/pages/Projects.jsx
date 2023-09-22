export default function Projects() {
  return (
    <div className="relative text-center p-24">
      <h1 className="text-2xl text-gray-600 font-serif font-bold">
        To see some of my projects,{" "}
        <span className="border-b-2 border-gray-600 text-orange-600">
          {" "}
          click
        </span>{" "}
        on a photo!
      </h1>
      <div className="flex mt-10 justify-center gap-10  ">
        <a href="https://reusable-components-topaz.vercel.app/">
          <div className="border rounded-xl shadow-lg">
            <img
              className=" w-11/12 "
              src="ReusableComponents.png"
              alt="ProjectComponents"
            />
          </div>
          <div className="p-3">
            <h1 className="font-serif text-xl text-gray-700">
              Reusable Components
            </h1>
            <p> Useing: JavaScript, Html, Tailwind, React</p>
          </div>
        </a>
        <a href="https://zoom-redesign-pi.vercel.app/" target="_blank">
          <div className="border rounded-xl shadow-lg">
            <img className="w-11/12" src="Zoom.png" alt="projectZoom" />
          </div>

          <div className="p-3">
            <h1 className="font-serif text-gray-700 text-xl">Zoom redesign</h1>

            <p>Useing: JavaScript, Html, tailwind, React text-lg</p>
          </div>
        </a>
        <a href="https://radio-player-react-blond.vercel.app/">
          <div className="border rounded-xl shadow-lg">
            <img className="w-11/12" src="RadioPlayer.png" alt="Radio" />
          </div>
          <div className="p-3">
            <h1 className="font-serif text-gray-700 text-xl">Radio Project</h1>

            <p> Useing: React, fetching API, tailwind, html, javaScript</p>
          </div>
        </a>
      </div>
    </div>
  );
}
