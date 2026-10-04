import React from "react";

export default function Certificates() {
  const certificates = [
    {
      name: "MERN Stack Development",
      img: "/img/mern.png",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:2d3c7d53-31da-4471-b350-d930800edd69",
    },
    {
      name: "Unified Mentor Internship",
      img: "/img/intern.png",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:cadfa186-86fc-4494-a589-0ddb80f1eecf",
    },
     {
      name: "Ai for Beginners",
      img: "/img/ai.png",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:cadfa186-86fc-4494-a589-0ddb80f1eecf",
    },
  ];

  return (
    <section className="p-6 sm:p-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide text-center mx-auto py-2 font-light px-8 w-fit rounded-full backdrop-blur-md bg-white/20 text-white">
        Certificates
      </h2>

      <div className="my-15 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-[200px]"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-white/20 transition duration-300 group-hover:scale-105">
              <img
                src={cert.img}
                alt={cert.name}
                className="w-full h-[150px] object-cover"
              />
            </div>

            <h3 className="mt-3 text-center text-lg text-white font-semibold group-hover:text-blue-400 transition">
              {cert.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
