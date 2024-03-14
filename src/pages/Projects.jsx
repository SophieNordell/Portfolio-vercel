import { useState } from "react";
import Modal from "./modal";

export default function Projects() {
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isRadioModalOpen, setIsRadioModalOpen] = useState(false);
  const [isBlueyModalOpen, setIsBlueyModalOpen] = useState(false);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
  const [isRebelRunwayModalOpen, setIsRebelRunwayModalOpen] = useState(false);
  const [isAiAdWordsModalOpen, setIsAiAdWordsModalOpen] = useState(false);

  const openModal = (modalSetter) => {
    modalSetter(true);
  };

  const closeModal = (modalSetter) => {
    modalSetter(false);
  };

  return (
    <div className="relative text-center p-10 bg-[#4D5D53] flex flex-col justify-center gap-10 font-nunito ">
      <h1 className="text-2xl text-gray-300 font-serif font-bold ">
        To see some of my projects, click on a photo!
      </h1>
      {/* ---------------------Zoom Project ----------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto max-w-7xl gap-5 mt-16 bg-[#4D5D53]">
        <div className="col-span-1 md:col-span-1 mt-5">
          <a
            href="https://zoom-redesign-pi.vercel.app/"
            target="_blank"
            className="col-span-1"
          >
            <img
              className="w-full h-64  object-cover"
              src="Zoom.png"
              alt="projectZoom"
            />
          </a>
          <div className="mt-8">
            <h1 className="font-serif text-gray-300 text-xl">Zoom redesign</h1>
            <div>
              <button
                onClick={() => openModal(setIsZoomModalOpen)}
                className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
              >
                About the project
              </button>

              <Modal
                isOpen={isZoomModalOpen}
                onClose={() => closeModal(setIsZoomModalOpen)}
                content="In this school project, I utilized React, 
                Tailwind, and JavaScript to redesign the Zoom website and make it more 
                structured and user-friendly. By implementing these technologies, I 
                created a cleaner and more efficient user experience, resulting in a 
                less cluttered and more organized design."
              />
            </div>
          </div>
        </div>

        {/* ------------------------------Radio Project----------------------------- */}
        <div>
          <a
            href="https://radio-player-react-blond.vercel.app/"
            target="_blank"
            className="col-span-1"
          >
            <div className="rounded p-5">
              <img
                className="w-full h-64 object-cover"
                src="RadioPlayer.png"
                alt="Radio"
              />
            </div>
          </a>
          <div className="mt-3 flex flex-col">
            <h1 className="font-serif text-gray-300 text-xl">Radio Project</h1>
            <div>
              <button
                onClick={() => openModal(setIsRadioModalOpen)}
                className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
              >
                About the project
              </button>
              <Modal
                isOpen={isRadioModalOpen}
                onClose={() => closeModal(setIsRadioModalOpen)}
                content="In this school project, I created a radio application 
                where I used JavaScript to fetch data from an API. By integrating the 
                API call directly into JavaScript, I was able to dynamically load radio 
                content and provide users with a seamless radio experience."
              />
            </div>
          </div>
        </div>
        {/* -----------------------------------Bluey Project--------------------------- */}
        <div>
          <a
            href="https://react-memory-game-kids.vercel.app/"
            target="_blank"
            className="col-span-1 "
          >
            <div className="rounded p-5">
              <img
                className="w-full h-64 object-cover"
                src="blueyMemory.png"
                alt="Bluey Memory"
              />
            </div>
          </a>

          <div className="mt-3">
            <h1 className="font-serif text-xl text-gray-300">
              Bluey memory game for kids
            </h1>
            <div>
              <button
                onClick={() => openModal(setIsBlueyModalOpen)}
                className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
              >
                About the project
              </button>
              <Modal
                isOpen={isBlueyModalOpen}
                onClose={() => closeModal(setIsBlueyModalOpen)}
                content="In one of my own projects, I created an interactive memory game 
                specifically designed for young children. By using React to build the 
                interface, Tailwind CSS for styling, and JavaScript for the logic, 
                I created an entertaining and educational gaming experience. The goal 
                was to provide children with a fun platform for memory exercises while 
                interacting with colorful and engaging elements."
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mt-10 text-[#8F9779]">
          ------ My Progress ------
        </h1>
      </div>

      {/* -----------------------------NEW PROJECTS--------------------------------*/}

      {/*  -------------------------- Weather app -------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-20 mx-auto max-w-7xl gap-5 mt-16 bg-[#4D5D53]">
        <div>
          <a
            href="https://github.com/SophieNordell/Weather-App"
            target="_blank"
            className="col-span-1"
          >
            <div className="rounded overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src="weatherPhone.png"
                alt="weatherApp"
              />
            </div>
          </a>
          <div className="mt-3">
            <h1 className="font-serif text-xl text-gray-300">
              Cute weather app
            </h1>
            <div>
              <button
                onClick={() => openModal(setIsWeatherModalOpen)}
                className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
              >
                About the project
              </button>
              <Modal
                isOpen={isWeatherModalOpen}
                onClose={() => closeModal(setIsWeatherModalOpen)}
                content="My classmate and I developed this weather app, 
                a charming mobile application using React Native and JavaScript. 
                This playful application is designed for both children and adults, 
                offering an entertaining experience. By combining technology and 
                user-friendliness, I created an app that appeals not only to younger 
                audiences but also sparks joy and interest among adult users"
              />
            </div>
          </div>
        </div>

        {/* --------------------------- RebalRunway ---------------------------*/}
        <div className="md:ml-10">
          <a
            href="https://rebel-runway-webshop-kazo5oylo-chasacademy-linnea-svensson.vercel.app/"
            target="_blank"
            className="w-11/12"
          >
            <div className="rounded overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src="rebelrunway.png"
                alt="projectZoom"
              />
            </div>
          </a>
          <div className="mt-3">
            <h1 className="font-serif text-gray-300 text-xl">RebelRunway</h1>
            <div>
              <button
                onClick={() => openModal(setIsRebelRunwayModalOpen)}
                className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
              >
                About the project
              </button>
              <Modal
                isOpen={isRebelRunwayModalOpen}
                onClose={() => closeModal(setIsRebelRunwayModalOpen)}
                content="In a recently completed school project, we were a group of six 
                people working together to create an e-commerce website for clothing. 
                By combining our skills in JavaScript, Tailwind CSS, and Typescript, 
                we created a user-friendly and stylish platform. To manage our database 
                structure, we chose Prisma, which provided us with an efficient and reliable 
                solution for database interactions. The project not only gave us technical 
                experience but also the opportunity to collaborate and develop our skills 
                in web development. It was a rewarding experience where we integrated 
                various technologies to create a complete and functional website."
              />
            </div>
          </div>
        </div>

        {/* -------------------- Ai-AdWords -----------------------*/}

        <div className="md:ml-10">
          <a href="" target="_blank" className="w-11/12">
            <div className="rounded overflow-hidden flex items-center">
              <img src="comingsoon3.jpg" alt="" />
            </div>
          </a>
          <div className="mt-3">
            <h1 className="font-serif text-xl text-gray-300 ">Ai-AdWords</h1>
            <div>
              <button
                onClick={() => openModal(setIsAiAdWordsModalOpen)}
                className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
              >
                About the project
              </button>

              <Modal
                isOpen={isAiAdWordsModalOpen}
                onClose={() => closeModal(setIsAiAdWordsModalOpen)}
                content="Over the past six months, a colleague and I have been 
                involved in an exciting project with the company Linespotting during 
                our internship. Our focus has been on creating a practical intermediary
                 solution for those working with Google Ads. Leveraging technologies like
                  Next.js and Tailwind CSS, we've built a responsive and efficient web 
                  platform. Firebase serves as our robust database solution, and the project
                   is smoothly coordinated through GitHub using Git for version control. 
                   This experience has not only strengthened our technical skills but has 
                   also provided insight into how real projects are managed and interact 
                   with companies in the industry. The project will be launched in the near 
                   future and will be available for use in the market."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
