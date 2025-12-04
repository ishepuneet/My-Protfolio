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
        <div className="w-full overflow-hidden " id="Skills">

            <h2 className="text-2xl tracking-wide font-light text-center mx-auto py-1 px-8 w-fit rounded-full backdrop-blur-md bg-white/20 text-shadow-xs text-white">
                Skills
            </h2>


            <div className="flex items-center my-10">
                <div className="flex animate-scrollRight gap-8">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="min-w-[160px] h-[160px] flex flex-col items-center cursor-pointer justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-md hover:scale-105 transition-all duration-300"
                        >
                            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-3 object-contain" />
                            <p className="text-white text-xl font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
