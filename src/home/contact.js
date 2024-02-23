import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"

const logos = [
    { id: 'linkedin', src: linkedin, alt: 'LinkedIn', link:"https://www.linkedin.com/in/kaung-htet-15747a167" },
    { id: 'github', src: github, alt: 'GitHub',link:"https://github.com/just-kaunghtet" },
    { id: 'facebook', src: facebook, alt: 'Facebook',link:"https://www.facebook.com/setsuna.f.siei.00" },
  ];
export default function Contact()
{
    return (
        <main className="w-screen h-screen grid grid-cols-2 bg-cyan-950 pt-24 pl-20 items-center" id='contact'>
            <div className="flex flex-col">
            <h1 className=" text-2xl text-white mb-10">Contact Me Anytime</h1>
            <div className="grid "style={{gridTemplateColumns:'2.5fr 1fr'}}>
                <input className="h-10 mr-10 pl-5" type="text" placeholder="Enter your message"/><button className=" bg-white h-10 rounded-lg hover:bg-gray-700">Send</button>
            </div>
            <div className="grid justify-center items-center text-white text-lg gap-5 mt-10"style={{gridTemplateColumns:'20px 1fr'}}>
            <img src="" alt="email"/> <span> : kaunghtet.kh@gmail.com </span>
            <img src="" alt="phone"/><span> : +959798284110 </span>
            <img src="" alt="whatsapp"/><span> : +959798284110 </span>
            <img src="" alt="viber"/><span> : +959798284110 </span>
            </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 flex-col pl-20">
                {logos.map((logo)=>(
                        <a className="flex justify-start items-center text-white text-2xl gap-10" href={logo.link}><img src={logo.src} alt={logo.id} className="w-10 h-10 "/>{logo.alt}</a> 
                ))}    
            </div>
            <footer className="text-slate-950 col-span-full"> My Portfolio Project @ 2024  | Design by Kaung Htet | Powered by Tailwind and React | All Rights Reserved </footer>
        </main>
    )
}