import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import facebook from "../images/facebook.png";
import email from "../images/email.png";
import mobile from "../images/mobile.png";
import whatsapp from "../images/whatsapp.png";
import viber from "../images/viber.png"
const icons =  [
    { name:"email", src:email , text:"kkaunghtet.kh@gmail.com" },
    { name:"phone", src:mobile , text:"+959798284110" },
    { name:"whatsapp", src:whatsapp , text:"+959798284110" },
    { name:"viber", src:viber , text:"+959798284110" },
];
const logos = [
    { id: 'linkedin', src: linkedin, alt: 'LinkedIn', link:"https://www.linkedin.com/in/kaung-htet-15747a167" },
    { id: 'github', src: github, alt: 'GitHub',link:"https://github.com/just-kaunghtet" },
    { id: 'facebook', src: facebook, alt: 'Facebook',link:"https://www.facebook.com/setsuna.f.siei.00" },
  ];
export default function Contact()
{
    return (
        <main className="w-screen h-screen grid sm:grid-cols-2 grid-cols-1 bg-darkBlue sm:pt-24 sm:pl-20 p-10 items-center" id='contact'>
            <div className="flex flex-col">
            <h1 className=" text-2xl text-white mb-10">Send Me A Message</h1>
            <div className="grid "style={{gridTemplateColumns:'2.5fr 1fr'}}>
                <input className="h-10 mr-10 pl-5" type="text" placeholder="Enter your message"/><button className=" bg-silver text-orange h-10 w-20 rounded-lg hover:bg-orange hover:text-silver">Send</button>
            </div>
            <div className="flex my-10 gap-10">
            {logos.map((logo)=>(
                    <div className="lg:flex lg:gap-5 flex-col">
                        <a className="flex justify-start items-center text-white gap-10 " href={logo.link}><img src={logo.src} alt={logo.id} className="w-10 h-10 "/></a>
                        <span className="sm:flex hidden text-white ">{logo.alt}</span>
                    </div> 
                ))} 
            </div>
            </div>
            <div className="flex justify-center items-start gap-8 flex-col px-10 py-10">
            {icons.map((icon)=>(
                <div className="grid justify-center items-center text-white text-lg gap-5 lg:px-20"style={{gridTemplateColumns:'20px 1fr'}}>
                    <img className="w-20" src={icon.src} alt={icon.name}/>
                    <span>{icon.text}</span>
                </div>
            ))} 
            </div>
            <footer className="text-white col-span-full"> My Portfolio Project @ 2024  | Design by Kaung Htet | Made with Tailwind and React | All Rights Reserved </footer>
        </main>
    )
}