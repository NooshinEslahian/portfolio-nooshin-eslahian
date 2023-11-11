import React from "react";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button className="w-[50px] h-[45px] fixed bottom-[50px] right-[50px] font-semibold text-[20px] bg-blue-600 rounded-lg text-white" onClick={scrollUp}> 
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTop;
