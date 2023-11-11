import React from "react";
import { FaGithub } from "react-icons/fa";
import pic1 from "../assets/apple-site.png";
import pic2 from "../assets/microsoft.png";
import pic3 from "../assets/oriflame.png";
import figmaProject from "../assets/figma-project.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: pic1,
      title: "apple",
      link: "https://nooshineslahian.github.io/apple/",
    },
    {
      id: 2,
      image: pic2,
      title: "microsoft",
      link: "https://nooshineslahian.github.io/microsoft/",
    },
    {
      id: 3,
      image: pic3,
      title: "oriflame",
      link: "https://nooshineslahian.github.io/oriflame/",
    },
    {
      id: 4,
      image: figmaProject,
      title: "figma",
      link: "https://www.figma.com/file/fpU7WOcTpQyhcRlaEqrtLr/ui%2Ffriday%2Fproject?type=design&node-id=4%3A11&t=gFwkABz0avjShOKM-1",
    },
  ];
  return (
    <section title="Portfolio" className="mt-[30px] p-4 ">
      <hr className="w-[100%] " />
      <h2 className="font-semibold pt-5 text-[18px] text-blue-900 dark:text-white">
        Portfolio
      </h2>
      <div className="grid lg:gap-14 lg:grid-cols-2 gap-8 border-5 p-5 ">
        {projects.map(({ id, image, title, link }) => (
          <div
            key={id}
            className="h-[250px] flex flex-row  flex-wrap overflow-hidden justify-center p-4 shadow-lg dark:shadow-gray-400 rounded-[10px] duration-300 ease-in-out hover:scale-110  bg-slate-100 dark:text-blue-950"
          >
            <img src={image} className="w-2/3 rounded-md " />
            <div className="w-1/3 mt-5 p-8 ">
              <h2 className="text-[20px] text-blue-700">{title}</h2>
              <a href={link} className="block mt-[25px] text-[38px] text-blue-900 hover:text-blue-700 duration-150 hover:scale-110 ">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
