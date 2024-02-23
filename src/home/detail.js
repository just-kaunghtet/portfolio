import React, { useState } from "react";
import ol from "../images/online-library.png";
import folio from "../images/portfolio.png"
import plantCare from "../images/manufacturing.png";
import checkIn from "../images/check-in.png"
import attandence from "../images/attendance.png"


export default function Detail() {
    const [projects, setProjects] = useState([
        { name: "Portfilio Page",src:folio, description: "pfp", language: ["React", "Tailwind CSS"], active: true },
        { name: "Hotel Front Desk System",src:checkIn, description: "hfds", language: ["Java", "MySQL"], active: false },
        { name: "Book Library",src:ol, description: "b-l", language: ["HTML", "CSS", "JavaScript", "React"], active: false },
        { name: "Automated Plant Care System",src:plantCare, description: "apcs", language: ["C++", "Arduino"], active: false },
        { name: "Student Attendance System", src:attandence, description: "sas", language: ["C++", "Arduino", "React"], active: false }
    ]);

    // Function to update project status
    function updateProjectStatus(clickedProject) {
        setProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.name === clickedProject.name) {
                    return { ...project, active: true };
                }
                return { ...project, active: false };
            });
        });
    }

    return (
        <main className="flex flex-row w-screen bg-gray-600 h-screen p-10 pt-24" id="details">
            <div className="flex flex-col justify-around">
                {projects.map(project => (
                    <span
                        key={project.name}
                        className={`flex text-xl text-white h-auto p-5 items-center rounded-tl-lg rounded-bl-lg hover:bg-cyan-950 hover:shadow-xl hover:cursor-pointer ${project.active ? "bg-cyan-950" : ""}`}
                        onClick={() => updateProjectStatus(project)}
                    >
                        {project.name}
                    </span>
                ))}
            </div>
            <div className="flex flex-row bg-cyan-950 w-full rounded-lg">
                {projects.map(project =>
                    project.active ? (
                        <div className=" flex gap-5 ml-10 mt-10" key={project.name}>
                            <img src={project.src} alt={project.name} className="h-40 w-auto" />
                            <h1 className="text-white">{`Project Name: ${project.name}`}</h1>
                            <div className="text-white">
                                Used Languages: 
                                {project.language.map(lang => (
                                     <span key={lang}>{` ${lang}`}</span>
                                ))}
                            </div>
                        </div>
                    ) : null
                )}
            </div>
        </main>
    );
}
