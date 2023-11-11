import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import avatar from "../assets/mypic.JPG";

const Me = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com/Nooshin25595245",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/noosh_es",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      link: "https://github.com/NooshinEslahian",
      icon: <FaGithub />,
    },
  ];
  return (
    <section className=" flex flex-col justify-start p-5">
      <h2 className="text-lg font-bold uppercase mb-2 text-blue-900 dark:text-white">Nooshin-Eslahian</h2>
      <h3 className="font-semibold mt-3 text-blue-950 dark:text-white">Fronend Developer</h3>
      <p className="max-w-xl font-light mt-3 text-blue-950 dark:text-white">
        I am a Fronend Developer and i am also a little familiar UI/UX
      </p>
      {/*********************social icons*************************/}
      <div className="flex flex-row gap-3 mt-5 w-full">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-950 cursor-pointer duration-300 hover:text-blue-900 w-[50px] text-[27px] mt-4 dark:text-white dark:hover:text-blue-200"
          >
            {icon}
          </a>
        ))}

        {/*********************my pic******************************/}
        <div>
          <img
            src={avatar}
            alt="pic"
            className="w-40 h-40 md:w-62 md:h-62 object-cover absolute  right-[12px] top-[190px] md:right-[110px] lg:md:right-[110px] xl:md:right-[110px] md:top-[70px] lg:top-[70px]
            xl:top-[70px]  bg-gradient-to-b from-blue-800 rounded-xl dark:from-yellow-100 mt-[28px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Me;
