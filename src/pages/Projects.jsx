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
                content="I detta skolprojektet använde jag mig utav React, Tailwind och JavaScript för att 
                omgestalta Zooms webbplats och göra den mer strukturerad och användarvänlig.
                 Genom att implementera dessa teknologier skapade jag en renare och mer effektiv 
                 användarupplevelse, vilket resulterade i en mindre plottrig och mer organiserad design"
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
                content="I detta skolprojektet skapade jag en radiospelsapplikation
      där jag använde mig av JavaScript för att hämta data från ett API.
      Genom att integrera API-hämtningen direkt i JavaScript kunde jag dynamiskt ladda 
      in radioinnehållet och ge användarna
      en enhetlig radioupplevelse."
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
                content="I ett utav mina egna projekt skapade jag ett interaktivt memory-spel 
                speciellt utformat för små barn. Genom att använda mig av React för att bygga
                 gränssnittet, Tailwind CSS för stilisering och JavaScript för logiken, 
                 skapade jag en underhållande och pedagogisk spelupplevelse. 
                 Målet var att erbjuda barnen en rolig plattform för minnesövningar 
                 samtidigt som de interagerar med färgglada och engagerande element."
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
                content="Denna väderapp utvecklade jag och en kompis i klassen en charmig mobilapp med
                   React Native och JavaScript. Denna lekfulla applikation är designad för både barn
                   och vuxna, erbjudandes en underhållande upplevelse. Genom att kombinera 
                   teknologi och användarvänlighet skapade jag en app som 
                   inte bara tilltalar de yngre, utan också väcker glädje och intresse hos vuxna användare"
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
                content="I ett nyligen genomfört skolprojekt, var vi en grupp på sex personer 
                som arbetade tillsammans för att skapa en e-handelswebbplats för kläder. 
                Genom att kombinera våra kunskaper i JavaScript, Tailwind CSS, och Typescript 
                skapade vi en användarvänlig och snygg plattform. För att hantera vår databasstruktur 
                valde vi Prisma, vilket gav oss en effektiv och pålitlig lösning för databasinteraktioner. 
                Projektet gav oss inte bara teknisk erfarenhet utan också möjligheten att samarbeta och 
                utveckla våra färdigheter inom webbutveckling. Det var en givande upplevelse där vi 
                integrerade olika teknologier för att skapa en fullständig och fungerande webbplats"
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
                content="Under de senaste sex månaderna har jag och en kollega engagerat 
                oss i ett spännande projekt med företaget Linespotting under vår LIA. Vårt fokus 
                har varit att skapa en praktisk mellanhandslösning för dem som arbetar med Google Ads. 
                Genom att utnyttja teknologier som Next.js och Tailwind CSS har vi byggt en responsiv 
                och effektiv webbplattform. Firebase används som vår robusta databaslösning, och 
                projektet är smidigt samordnat genom GitHub med hjälp av Git för versionshantering. 
                Denna erfarenhet har inte bara stärkt våra tekniska färdigheter utan har också gett 
                oss insikt i hur verkliga projekt drivs och samverkar med företag i branschen.
                Projektet kommer att lanseras inom en snar framtid och kommer finnas att arbeta med ute
                på marknaden."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
