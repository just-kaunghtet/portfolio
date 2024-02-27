import React, { useState } from "react";
import ol from "../images/online-library.png";
import folio from "../images/portfolio.png"
import plantCare from "../images/manufacturing.png";
import checkIn from "../images/check-in.png"
import attandence from "../images/attendance.png"


export default function Detail() {
    const [projects, setProjects] = useState([
        { name: "Portfilio Page",src:folio, description: "pfp", language: ["React", "Tailwind CSS"], active: true , webLink:"https://guileless-mermaid-595299.netlify.app"},
        { name: "Hotel Front Desk System",src:checkIn, description: "hfds", language: ["Java", "MySQL"], active: false , webLink:"" },
        { name: "Book Library",src:ol, description: "b-l", language: ["HTML", "CSS", "JavaScript", "React"], active: false , webLink:"https://preeminent-squirrel-459f18.netlify.app"},
        { name: "Automated Plant Care System",src:plantCare, description: "apcs", language: ["C++", "Arduino"], active: false , webLink:""},
        { name: "Student Attendance System", src:attandence, description: "sas", language: ["C++", "Arduino", "React"], active: false , webLink:""}
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
        <main className="flex flex-row w-screen items-center bg-bluegray h-screen lg:px-20 px-5 lg:py-20 py-10" id="details">
            <div className="flex flex-col justify-around w-fit">
                {projects.map(project => (
                    <span
                        key={project.name}
                        className={`flex lg:text-lg text-sm text-silver h-auto p-5 items-center rounded-tl-lg rounded-bl-lg hover:bg-darkBlue hover:shadow-xl hover:cursor-pointer ${project.active ? "bg-darkBlue" : ""}`}
                        onClick={() => updateProjectStatus(project)}
                    >
                        {project.name}
                    </span>
                ))}
            </div>
            <div className="flex flex-row bg-darkBlue h-full w-full rounded-lg">
                {projects.map(project =>
                    project.active ? (
                        <div className=" flex flex-col gap-5 sm:m-10 m-5" key={project.name}>
                            <img src={project.src} alt={project.name} className="h-40 w-40" />
                            <h1 className="text-white">{`Project Name: ${project.name}`}</h1>
                            <div className="text-white">
                                Used Languages: 
                                {project.language.map(lang => (
                                     <span key={lang}>{`${lang}`}</span>
                                ))}
                            </div>
                            {
                                project.webLink &&
                                <a href={project.webLink} className="flex bg-bluegray rounded-xl w-40 h-14 text-orange text-lg items-center justify-center hover:shadow-lg hover:text-slate-800 hover:bg-white">Go to Website</a>
                            }
                        </div>
                    ) : null
                )}
            </div>
        </main>
    );
}
