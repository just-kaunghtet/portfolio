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
        <main className="flex flex-col justify-top bg-slate-700 h-screen w-screen lg:px-10 px-5 lg:pt-20 pt-10"id="about">
            <h1 className="text-white lg:text-5xl text-2xl text-left w-full mb-5 top-0">Get to Know Me</h1>
            <p className="text-white lg:mb-10 mb-5">
                   I am a computer engineering student with an experience in front-end development.
                   My Journey to the Front-End world started when I was introduced to HTML, CSS and JavaScript through YouTube.
                   And then I embarked on a Journey of a front-end developer , learning and mastering the skills required for web development.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-start text-center">
            <div>
            <h1 className="text-white text-3xl">Skills</h1>
            <div className="flex lg:flex-col items-start lg:px-20 my-5 justify-center ">
                {languages.map((language)=>
                (
                  <div className="flex justify-start lg:my-5" ><img src={language.src} alt={language.alt} className="w-10 h-10 mr-10 ml-10"/><h3 className="text-white hidden lg:flex">{language.name}</h3></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
            <div className="lg:flex lg:flex-col grid sm:grid-cols-2 grid-cols-1 items-center">
              <div className="flex flex-col text-white sm:border-r-2 border-0 lg:border-0">
                <h1 className="text-white lg:text-3xl text-xl my-5">Educational Background </h1>
                 <div className="flex flex-col items-center justify-center"> <h1 className=" text-slate-950 lg:text-3xl text-xl my-0"> Bachelor of Science </h1><span> Yangon Technological University</span>
                       <span>From December 2016 - To Current </span></div> 
              </div>
              <div className="sm:flex hidden flex-col">
              <h1 className="text-white lg:text-3xl text-xl my-5"> Experiences Unrelated to Profession </h1>
              <div className="flex flex-col">
                <div  className="text-white flex flex-col justify-center items-center">
                  <h1 className="lg:text-3xl text-xl mr-5 text-slate-950">ESL Teacher</h1> 
                <span>ALBA: Asia Language and Business Academy </span></div>
                <span className="text-white"> September 2019 - February 2020 </span>
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
            </div>
            </div>
            
        </main>
    )
}