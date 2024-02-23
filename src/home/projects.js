import ol from "../images/online-library.png";
import folio from "../images/portfolio.png"
import plantCare from "../images/manufacturing.png";
import checkIn from "../images/check-in.png"
import attandence from "../images/attendance.png"
export default function Projects()
{
    const projects=[
        { name: "Portfilio Page",src:folio, description: "pfp", language: ["React", "Tailwind CSS"], active: true },
        { name: "Hotel Front Desk System",src:checkIn, description: "hfds", language: ["Java", "MySQL"], active: false },
        { name: "Book Library",src:ol, description: "b-l", language: ["HTML", "CSS", "JavaScript", "React"], active: false },
        { name: "IOT Farm Bot",src:plantCare, description: "apcs", language: ["C++", "Arduino"], active: false },
        { name: "Employee Attendance System", src:attandence, description: "sas", language: ["C++", "Arduino", "React"], active: false }
    ]
    const handleNavLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({
                  behavior: 'smooth'
                });
              });
        }
      };
    return(
        <main className="h-screen flex flex-col bg-slate-800 justify-center" id="projects">
            <h1 className="mb-5 mt-5 text-white font-bold w-screen text-4xl text-center pb-5">Explore My Previous Works</h1>
            <div className="flex flex-row bg-white p-5 justify-evenly ml-10 mr-10 rounded-lg" >
                {projects.map((project=>
                <a className="bg-slate-600 rounded-lg w-60 h-80 flex flex-col relative items-center hover:shadow-inner hover:opacity-95 hover:cursor-pointer hover:border-4 md:"
                    onClick={() => handleNavLinkClick("details",project)} >
                    <img src={project.src} alt={project.name} className="w-40 h-auto object-cover mt-3 rounded-lg"/>
                    <span  className="text-center mt-2 absolute w-full text-xl bottom-0 right-0.5 text-white pb-2 ">
                        {project.name}                 
                    </span>
                    <a><img src=""></img></a>
                </a>
                ))}
            </div>

        </main>
    )
}