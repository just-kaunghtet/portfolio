import ol from "../images/online-library.png";
import folio from "../images/portfolio.png"
import plantCare from "../images/manufacturing.png";
import checkIn from "../images/check-in.png"
import attandence from "../images/attendance.png"
export default function Projects()
{
    const projects=[
        { name: "Portfilio Page",src:folio, description: "pfp", active: true },
        { name: "Hotel Front Desk System",src:checkIn, description: "hfds", active: false },
        { name: "Book Library",src:ol, description: "b-l", active: false },
        { name: "IOT Farm Bot",src:plantCare, description: "apcs", active: false },
        { name: "Employee Attendance System", src:attandence, description: "sas", active: false }
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
        <main className="h-screen w-screen flex flex-col bg-darkBlue justify-center items-center" id="projects">
            <h1 className="mb-5 mt-5 text-white font-bold w-screen text-4xl text-center pb-5">Explore My Previous Works</h1>
            <div className="flex flex-row bg-bluegray p-5 w-fit rounded-lg gap-5" >
                {projects.map((project=>
                <div
                    className="bg-darkBlue rounded-lg flex flex-col sm:h-60 h-24 relative items-center hover:shadow-inner hover:opacity-95 hover:cursor-pointer hover:border-4 lg:w-40 md:w-28 "
                    onClick={() => handleNavLinkClick("details",project)} >
                    <img src={project.src} alt={project.description} className="w-40 h-auto object-cover mt-3 rounded-lg md:w-28"/>
                    <span  className="sm:flex hidden justify-center text-center mt-2 absolute w-full text-xl bottom-0 text-white pb-2 md:text-lg ">
                        {project.name}                 
                    </span>
                    
                </div>
                ))}
            </div>

        </main>
    )
}