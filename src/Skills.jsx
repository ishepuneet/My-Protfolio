import React from "react";

const skills = [
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
];

export default function Skills() {
    return (
        <div className="w-full overflow-hidden py-10 my-20" id="Skills">

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide font-light text-center mx-auto py-1 px-8 w-fit rounded-full backdrop-blur-md bg-white/20 text-white">
                Skills
            </h2>

            {/* Scrolling Skills */}
            <div className="flex items-center my-10">
                <div className="flex animate-scrollRight gap-4 sm:gap-8">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] 
                                       h-[120px] sm:h-[140px] md:h-[160px]
                                       flex flex-col items-center justify-center 
                                       cursor-pointer rounded-2xl bg-white/10 backdrop-blur-md 
                                       border border-white/10 shadow-md 
                                       hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 object-contain"
                            />
                            <p className="text-white text-sm sm:text-base md:text-xl font-semibold">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
