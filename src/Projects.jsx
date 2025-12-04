import React, { useEffect, useState } from 'react'

export default function Projects() {

    const projects = [
        {
            title: "Pack Shifts UI Clone",
            desc: "A clone of Pack & shifts web interface built in React with modern UI styling and responsive layout.",
            img: "/img/pack.png",
            tags: ["React.js", "Bootstrap", ],
            demo: "https://pack-shifts.netlify.app/",
            code: "#",
        },
        {
            title: "A Music Player (internship)",
            desc: "Music Player built with Next.js and Tailwind CSS, featuring itunes appple Api.",
            img: "/img/music.png",
            tags: ["Next.js", "Tailwind","Music Player", "itunes apple Api"],
            demo: "https://rhythmx.vercel.app/",
            code: "#",
        },
        {
            title: "Meta Newsroom",
            desc: "Desktop app replicating Meta's Newsroom UI with Tailwind CSS for styling.",
            img: "/img/meta.png",
            tags: ["Vite+React","Tailwind css" ],
            demo: "https://byteroomnews.netlify.app/",
            code: "#",
        },
        {
            title: "WsCube Tech project",
            desc: "WsCube Tech website UI clone built with React.js + Bootstarp for styling.",
            img: "/img/wsCube.png",
            tags: ["React.js","Bootstrap" ],
            demo: "https://mini-multiple-page-website.netlify.app/",
            code: "#",
        },
         {
            title: "FundFusion (internship)",
            desc: "FundFusion is a smart platform that connects investors, entrepreneurs, and advisors to share ideas, find funding, and grow businesses together modern UI styling and responsive layout.",
            img: "/img/fund.png",
            tags: ["Next.js", "Tailwind.css", "Firebase"],
            demo: "https://fundfusionhub.vercel.app/",
            code: "#",
        },
         {
            title: "Wonder Log World (internship)",
            desc: "Travel Blog Website with frontend in Vite+React.js and Tailwind css for styling and resplonsive layout.",
            img: "/img/blog.png",
            tags: ["Vite", "React.js", "Tailwind css"],
            demo: "https://wonder-log-world.vercel.app/",
            code: "#",
        },
    ];

    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full mt-10 max-w-6xl mx-auto overflow-hidden text-white" id='projects'>

            <h2 className="text-2xl tracking-wide font-light text-center mx-auto py-1 px-8 w-fit rounded-full backdrop-blur-md bg-white/20 text-shadow-xs text-white">
                Project ShowCase
            </h2>

            <div
                className="flex transition-transform duration-700 my-10 ease-linear"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="min-w-full flex justify-center px-4 sm:px-8"
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-6 max-w-md w-full text-white text-center">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="rounded-2xl w-full h-52 object-cover object-center mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-200 text-sm mb-4">{project.desc}</p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-white/20 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4">
                                <a
                                    href={project.demo}
                                    className="bg-white text-gray-900 font-medium px-4 py-2 rounded-xl hover:bg-gray-200 transition"
                                >
                                    Live Demo
                                </a>
                                {/* <a
                                    href={project.code}
                                    className="border border-white/40 px-4 py-2 rounded-xl hover:bg-white/10 transition"
                                >
                                    Code
                                </a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
