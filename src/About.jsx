// import React, { useEffect, useState } from "react";
// import cv from '../public/img/resume.pdf'

// export default function About() {
//   const [visibleSections, setVisibleSections] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll(".scroll-section");

//       sections.forEach((section, i) => {
//         const rect = section.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;


//         setVisibleSections((prev) => ({
//           ...prev,
//           [i]: isVisible,
//         }));
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="text-white max-w-full p-0 " id="about">
//       <h2 className="text-2xl tracking-wide text-center mx-auto py-1 font-light  px-8 w-fit rounded-full backdrop-blur-md bg-white/20 text-shadow-xs text-white">
//         About
//       </h2>

//       <section className="space-y-20 mt-10 ">
//         <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 ">
//           {/* Left Slide Section */}
//           <div
//             className={`scroll-section transition-all duration-700 box1 ease-out lg:ml-20 md:ml-10 transform
//               ${visibleSections[0]
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-10 opacity-0"
//               }
//               lg:w-[80%] sm:w-[70%] md:w-[357px] p-5 rounded-3xl text-center`}
//           >
//             <h2 className="text-7xl lg:text-left md:text-left content font-semibold mb-2">Creative Mern Stack Developer</h2>
//             <p className="text-gray-200 lg:text-left md:text-left text-lg">
//               Design and code beautifully simple projects without overwhelming yourself with complexity. Enjoy your passion for creating with ease and love.
//             </p>

//             <div className="flex justify-between mx-auto font-light font-sans p-5 w-xs bio text-left text-white">
//               <ul className="leading-10">
//                 <li>Name :</li>
//                 <li>Age :</li>
//                 <li>Address :</li>
//                 <li>Phone No :</li>
//                 <li>E-mail :</li>
//                 <li>Country :</li>
//               </ul>
//               <ul className="leading-10">
//                 <li>Puneet</li>
//                 <li>23</li>
//                 <li>Jalandhar Cantt, Punjab</li>
//                 <li>+91-7526889964</li>
//                 <li>puneetkohli1102@gmail.com</li>
//                 <li>India</li>
//               </ul>
//               </div> 

//               <a href={cv} download>
//                 <button
//                   type="button"
//                   className="py-2.5 px-5 btn me-2 mb-2 text-sm font-medium rounded-full border border-green-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white/20 backdrop-blur-md text-white cursor-pointer"
//                 >
//                   Download CV
//                 </button>
//               </a>


//             </div>

//             {/* Right Slide Section */}
//             <div
//               className={`scroll-section transition-all duration-700 ease-out lg:ml-20 md:ml-8 transform
//               ${visibleSections[1]
//                   ? "translate-x-0 opacity-100"
//                   : "translate-x-10 opacity-0"
//                 }
//               sm:w-[70%] md:w-[64%] md:h-[440px] lg:h-[600px] bg-white/10 backdrop-blur-md border border-white/20 
//               p-5 rounded-3xl text-center`}
//              >
//               lg:w-[60%] sm:w-[70%] md:w-[80%] md:h-[437px] lg:h-[600px]
//               <img src="/img/pro2.webp" alt="" className="rounded-3xl w-full h-full" />
//             </div>
//           </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import cv from "../public/img/resume.pdf";

export default function About() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

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
    <div className="text-white w-full px-4 sm:px-6 md:px-10 lg:px-20 my-20 py-10" id="about">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide text-center mx-auto py-1 font-light px-8 w-fit rounded-full backdrop-blur-md bg-white/20">
        About
      </h2>

      {/* Main Section */}
      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 justify-center items-center">

          {/* LEFT SIDE */}
          <div
            className={`scroll-section transition-all duration-700 overflow-hidden ease-out transform
            ${visibleSections[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight">
              Creative MERN Stack Developer
            </h2>

            <p className="text-gray-200 text-base sm:text-lg mb-8">
              Design and code beautifully simple projects without overwhelming yourself. 
              Enjoy your passion for creating with ease and love.
            </p>

            {/* BIO SECTION */}
            <div className="grid grid-cols-2 gap-x-6 text-white mb-8">
              <div className="space-y-3 text-sm sm:text-base">
                <p>Name :</p>
                <p>Age :</p>
                <p>Address :</p>
                <p>Phone No :</p>
                <p>E-mail :</p>
                <p>Country :</p>
              </div>

              <div className="space-y-3 text-sm sm:text-base font-light">
                <p>Puneet</p>
                <p>25</p>
                <p>Jalandhar Cantt, Punjab</p>
                <p>+91-7526889964</p>
                <p>puneetkohli1102@gmail.com</p>
                <p>India</p>
              </div>
            </div>

            <a href={cv} download>
              <button
                type="button"
                className="py-2.5 px-6 rounded-full border border-green-500 bg-white/10 
                backdrop-blur-md hover:bg-green-600/20 transition text-white text-sm"
              >
                Download CV
              </button>
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            className={`scroll-section transition-all duration-700 overflow-hidden ease-out transform
            ${visibleSections[1] ? "translate-y-0 opacity-100" : "translate-y-30 opacity-0"}
            p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 sm:w-[70%] md:w-[60%] md:h-[440px] lg:h-[600px]`}
          >
            <img
              src="/img/pro2.webp"
              alt="profile"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
