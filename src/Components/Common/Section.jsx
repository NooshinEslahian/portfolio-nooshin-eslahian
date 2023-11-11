import React from "react";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-start py-16 px-5 text-center ">
      <h3 className="py-3 text-3xl lg:text-5xl ">{title}</h3>
      <p className="max-w-xl font-lighttext-gray-500mb-10 text-small md:text-base">
        {subtitle}
      </p>
      {children}
    </section>
  );
};

export default Section;
