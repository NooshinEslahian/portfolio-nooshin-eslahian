import React from "react";
import Section from "./Common/Section";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import react from "../assets/react.png";
import des from "../assets/figma.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/smoke.png";
import Boot from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: Html,
      title: "HTML",
    },
    {
      id: 2,
      image: Css,
      title: "css",
    },
    {
      id: 3,
      image: react,
      title: "react",
    },
    {
      id: 4,
      image: des,
      title: "figma",
    },
    {
      id: 5,
      image: sass,
      title: "sass",
    },
    {
      id: 6,
      image: tailwind,
      title: "tailwind",
    },
    {
      id: 7,
      image: Boot,
      title: "bootstrap",
    },
    {
      id: 8,
      image: javascript,
      title: "javascript",
    },
  ];
  return (
    <section className="p-4">
      <hr className="w-[100%] mt-[50px] " />
      <h3 className="font-semibold text-lg mt-[30px] mb-4 text-blue-900 dark:text-white">Services</h3>
      <div className="flex flex-row flex-wrap gap-10 justify-center  ">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-400 rounded-[10px] duration-300 ease-in-out hover:scale-110  bg-slate-100  dark:text-blue-950"
          >
            <img
              src={image}
              alt={title}
              className="inline-block w-[40px] h-[40px]"
            />
            <h3 className="mt-2">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
