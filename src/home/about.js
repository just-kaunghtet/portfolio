import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/javascript.png"
import react from "../images/react.png"
import DownloadButton from "./downloadButton"
export default function About()
{ 
    
    const languages=[
      {name:'HTML5', src:html ,alt:"html"},
      {name:'CSS3', src:css ,alt:"css"},
      {name:"JavaScript (ES6)", src:js ,alt:"js"},
      {name:'ReactJS', src:react ,alt:"react"},
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
        <main className="flex flex-col justify-top bg-slate-700 h-screen pl-10 pt-28"id="about">
            <h1 className="text-white text-5xl text-left w-full mb-5 top-0">Get to Know Me</h1>
            <p className="text-white mb-10">
                   I am a computer engineering student with an experience in front-end development.
                   My Journey to the Front-End world started when I was introduced to HTML, CSS and JavaScript through YouTube.
                   And then I embarked on a Journey of a front-end developer , learning and mastering the skills required for web development.
            </p>
            <div className="grid justify-start text-center" style={{gridTemplateColumns:'250px 1fr'}}>
            <div>
            <h1 className="text-white text-3xl">Skills</h1>
            <div className="flex flex-col text-center mt-8">
                {languages.map((language)=>
                (
                  <div className="flex justify-start items-center mt-5 mb-5" ><img src={language.src} alt={language.alt} className="w-10 h-10 mr-10 ml-10"/><h3 className="text-white">{language.name}</h3></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col text-white">
                <h1 className="text-white text-3xl pb-5">Educational Background </h1>
                 <div className="text-2xl flex justify-center"> <h1 className=" text-slate-950"> Bachelor of Science </h1>  | Yangon Technological University
                      From December 2016 - To Current </div> 
              </div>
              <div className="mt-10">
              <h1 className="text-white text-3xl pb-5"> Experiences Unrelated to Profession </h1>
              <div className="flex flex-col">
                <div  className="text-white flex justify-center items-center pb-5"><h1 className="text-2xl mr-5 text-slate-950">
                    ESL Teacher
                </h1> | ALBA: Asia Language and Business Academy </div>
              <ul className=" list-disc text-white flex flex-col items-start ml-40">
                Main Responsibilities :
                  <li>Provided one-on-one and group-based learning support to maintain student progress and development.</li>
                  <li>Kept records of student progress for teachers and parents and made notes on details such as behavior, grades, comprehension and personal growth.</li>
                  <li>Set up visual aids, equipment and classroom displays to support teacher's lesson delivery.</li>
                  <li>Administered quizzes and tests and documented grades. </li>
              </ul>
              </div>
              </div>
            </div>
            </div>
            <div className="flex items-center justify-center h-10 m-4">
              <div
                key="contact"
                className='text-white hover:bg-white hover:text-slate-700 hover:cursor-pointer rounded-md px-3 py-2 text-sm font-medium'
                onClick={() => handleNavLinkClick('contact')}
              >
                Contact Me
              </div>
              <DownloadButton/>
            </div>
        </main>
    )
}