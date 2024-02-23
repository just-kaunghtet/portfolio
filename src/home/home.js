import React, { useState, useEffect } from 'react';
import profile from '../images/profile.png';
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"
export default function Home() {
  const [logoOrder, setLogoOrder] = useState([]);

  const logos = [
    { id: 'linkedin', src: linkedin, alt: 'LinkedIn', link:"https://www.linkedin.com/in/kaung-htet-15747a167" },
    { id: 'github', src: github, alt: 'GitHub',link:"https://github.com/just-kaunghtet" },
    { id: 'facebook', src: facebook, alt: 'Facebook',link:"https://github.com/just-kaunghtet" },
    { id: 'youtube', src: youtube, alt: 'YouTube',link:"https://youtube.com/@allthingsfeline27320?si=m3u5MuqUEsrQQhKo" },
  ];
  const nav=[
            { name: 'Home', href: '#home', current: true },
            { name: 'About', href: '#about', current: false },
            { name: 'Projects', href: '#projects', current: false },
            { name: 'Contact Me', href: '#contact', current: false },
        ]    
  useEffect(() => {
      const delay = 100; 
      let timeout = 0;

      setLogoOrder([]);

      logos.forEach((logo, index) => {
        timeout += delay;
        setTimeout(() => {
          setLogoOrder((prevOrder) => [...prevOrder, logo]);
        }, timeout);
      });
  });
  const renderLogos = () => {
    return logoOrder.map((logo) => (
        <a href={logo.link} key={logo.id}>
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-12 h-12 hover:-translate-y-2 ease" 
        />
        </a>
      ));
  };
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
  return (
    <main className="grid grid-cols-2 bg-slate-500 w-full h-screen overflow-hidden" id='home'>
      <div className="flex flex-col text-center justify-center w-full h-full">
        <h1 className="text-gray-800 text-3xl font-bold m-2">Hello There!</h1>
        <h2 className="font-medium text-2xl m-2 ">I am <span className="text-indigo-800"> Kaung Htet</span></h2>
        <p>I am a front-end developer who is just trying my best to become better.</p>
        <div>
          <h3 className="text-black text-xl m-4">Find out more</h3>
          <div>
               {nav.map((item) => (
                        <button
                            className={`text-red-950 hover:bg-gray-700 bg-white hover:text-white hover:cursor-pointer rounded-md px-3 py-2 text-sm font-medium m-2`}
                            onClick={() => handleNavLinkClick(item.href.substring(1))}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-5">
          
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <img
          src={profile}
          alt="profile"
          className="w-96 rounded-full "
        />
        <div className='flex justify-evenly items-center mt-10 gap-5'>
        <h1 className='font-bold text-3xl'>Find Me on Socials:</h1>
          {renderLogos()}
        </div>
      </div>
    </main>
  );
}
