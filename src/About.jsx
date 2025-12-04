import React, { useEffect, useState } from "react";
import cv from '../public/img/resume.pdf'

export default function About() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;


        setVisibleSections((prev) => ({
          ...prev,
          [i]: isVisible,
        }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white p-10 " id="about">
      <h2 className="text-2xl tracking-wide text-center mx-auto py-1 font-light  px-8 w-fit rounded-full backdrop-blur-md bg-white/20 text-shadow-xs text-white">
        About
      </h2>

      <section className="space-y-20 mt-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 ">
          {/* Left Slide Section */}
          <div
            className={`scroll-section transition-all  duration-700 box1 ease-out lg:ml-20 md:ml-10 transform
              ${visibleSections[0]
                ? "translate-x-0 opacity-100"
                : "-translate-x-0 opacity-0"
              }
              lg:w-[80%] sm:w-[70%] md:w-[357px] p-5 rounded-3xl text-center`}
          >
            <h2 className="text-7xl lg:text-left md:text-left content font-semibold mb-2">Creative Mern Stack Developer</h2>
            <p className="text-gray-200 lg:text-left md:text-left text-lg">
              Design and code beautifully simple projects without overwhelming yourself with complexity. Enjoy your passion for creating with ease and love.
            </p>

            <div className="flex justify-between mx-auto font-light font-sans p-5 w-xs bio text-left text-white">
              <ul className="leading-10">
                <li>Name :</li>
                <li>Age :</li>
                <li>Address :</li>
                <li>Phone No :</li>
                <li>E-mail :</li>
                <li>Country :</li>
              </ul>
              <ul className="leading-10">
                <li>Puneet</li>
                <li>23</li>
                <li>Jalandhar Cantt, Punjab</li>
                <li>+91-7526889964</li>
                <li>puneetkohli1102@gmail.com</li>
                <li>India</li>
              </ul>
              </div> 

              <a href={cv} download>
                <button
                  type="button"
                  className="py-2.5 px-5 btn me-2 mb-2 text-sm font-medium rounded-full border border-green-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white/20 backdrop-blur-md text-white cursor-pointer"
                >
                  Download CV
                </button>
              </a>


            </div>

            {/* Right Slide Section */}
            <div
              className={`scroll-section transition-all duration-700 ease-out lg:ml-20 md:ml-8 transform
              ${visibleSections[1]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
                }
              lg:w-[60%] sm:w-[70%] md:w-[80%] md:h-[437px] lg:h-[600px] bg-white/10 backdrop-blur-md border border-white/20 
              p-5 rounded-3xl text-center`}
            >
              <img src="/img/pro2.webp" alt="" className="rounded-3xl" />
            </div>
          </div>
      </section>
    </div>
  );
}
