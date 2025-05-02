import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ScrollToTop from "@/components/scrollToTop";

const projectsData = [
  {
    id: "zoom",
    title: "Zoom Redesign",
    description:
      "In this school project, I utilized React, Tailwind, and JavaScript to redesign the Zoom website...",
    image: "Zoom.png",
    link: "https://zoom-redesign-pi.vercel.app/",
  },

  {
    id: "bluey",
    title: "Bluey Memory Game",
    description:
      "In one of my own projects, I created an interactive memory game specifically designed for young children...",
    image: "blueyMemory.png",
    link: "https://react-memory-game-kids.vercel.app/",
  },
  {
    id: "weather",
    title: "Cute Weather App",
    description:
      "My classmate and I developed this weather app, a charming mobile application using React Native and JavaScript...",
    image: "väderapp.jpg",
    link: "https://weather-cado-next.vercel.app/Home",
  },
  {
    id: "rebelRunway",
    title: "Rebel Runway",
    description:
      "In a recently completed school project, we were a group of six people working together to create an e-commerce website...",
    image: "rebelrunway.png",
    link: "https://rebel-runway-webshop-kazo5oylo-chasacademy-linnea-svensson.vercel.app/",
  },
  {
    id: "aiAdWords",
    title: "AI-AdWords",
    description:
      "Over the past six months, a colleague and I have been involved in an exciting project with the company Linespotting. Click the photo to go to the site.",
    image: "adsaver.jpg",
    link: "https://adsaver.org/",
  },
  {
    id: "Gems",
    title: "Gems",
    description:
      "We want to be a community that highlights games with female protagonists. We don’t want to exclude anyone, but rather fill a gap that many female gamers experience...",
    image: "gems.png",
    link: "https://www.figma.com/design/YBEITshpEeLAgL3kw2MX82/G.E.M.S-Projekt?node-id=2001-130&t=bBdduMs6mv07OhO3-1",
  },
];

export default function Projects() {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      id="projects"
      className="relative p-10 bg-[#8F9779] font-monserrat min-h-screen"
    >
      <h1 className="text-4xl font-semibold text-gray-100 pb-2 text-center pt-8">
        Some of my projects
      </h1>
      <p className="text-gray-200 text-lg mb-12 text-center">
        A glimpse into my learning journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
        {projectsData.map(({ id, title, description, image, link }) => (
          <div
            key={id}
            className="flex flex-col p-6 bg-[#4D5D53] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 self-start"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to view project"
              className="relative group"
            >
              <h2 className="text-2xl font-serif text-gray-100 pb-3">
                {title}
              </h2>
              <div className="w-full h-60 bg-[#4D5D53] flex items-center justify-center overflow-hidden rounded-lg md:shadow-md">
                <img
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  src={image}
                  alt={title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Click to view my project
                  </span>
                </div>
              </div>
            </a>
            <div className="flex flex-col flex-1 p-6">
              {openCardId === id && (
                <p className="text-gray-300 text-base p-3">{description}</p>
              )}
              <button
                onClick={() => toggleCard(id)}
                className="md:mt-2 md:py-3 px-1 py-2 bg-white text-[#4D5D53] font-semibold rounded-full hover:bg-gray-200 transition-colors transform hover:scale-105"
              >
                {openCardId === id ? "Close" : "Read about the project"}
                {openCardId === id ? (
                  <FaEyeSlash className="inline-block text-2xl " />
                ) : (
                  <FaEye className="inline-block md:text-2xl ml-2" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
}
