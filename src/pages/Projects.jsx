import { useState } from "react";
import Modal from "@/components/modal";

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
    id: "radio",
    title: "Radio Project",
    description:
      "In this school project, I created a radio application where I used JavaScript to fetch data from an API...",
    image: "RadioPlayer.png",
    link: "https://radio-player-react-blond.vercel.app/",
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
      "We want to be a community that highlights games with female protagonists. We don’t want to exclude anyone, but rather fill a gap that many female gamers experience. By filtering out games where players can choose to play as a female character, we provide girls with a quick way to find games they can identify with more easily and create a community with others who play the same games. are a Vi vill vara ett community som lyfter spel med kvinnliga huvudkaraktärer. Vi vill inte exkludera någon, men fylla ett tomrum som finns hos många kvinnliga gamers. Genom att filtrera ut de spel där man kan välja att spela en kvinnlig karaktär ger man tjejer en snabb väg att hitta spel de kan identifiera sig med lättare och få ett community med andra som spelar samma spel. that wants to elevate games with female protagonists. Use the filter below to find your game for your platform and join our amazing community of Sheroes!",
    image: "gems.png",
    link: "https://www.figma.com/design/YBEITshpEeLAgL3kw2MX82/G.E.M.S-Projekt?node-id=2001-130&t=bBdduMs6mv07OhO3-1",
  },
];

export default function Projects() {
  const [openModals, setOpenModals] = useState({});

  const toggleModal = (id) => {
    setOpenModals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative p-10 bg-[#8F9779] flex flex-col font-nunito">
      <h1 className="text-3xl text-gray-300 font-serif pb-1">
        Some of my projects
      </h1>
      <p className="text-gray-200 text-sm  mb-10">
        A glimpse into my growth and learning journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl gap-20 mt-16  bg-[#8F9779]">
        {projectsData.map(({ id, title, description, image, link }) => (
          <div key={id} className="col-span-1 ">
            <a href={link} target="_blank">
              <h1 className="font-serif text-xl mb-2 bold text-gray-300">
                {title}
              </h1>
              <img
                className="w-full h-64 object-contain bg-[#4D5D53] rounded-md p-3"
                src={image}
                alt={title}
              />
            </a>
            <div className="mt-3">
              <button
                onClick={() => toggleModal(id)}
                className="bg-[#4D5D53] text-gray-300 px-2 py-2 rounded-md hover:bg-[#5f7266]"
              >
                About the project
              </button>

              <Modal
                isOpen={openModals[id] || false}
                onClose={() => toggleModal(id)}
                content={description}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
