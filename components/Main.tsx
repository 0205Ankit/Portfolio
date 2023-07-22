"use client"
import { BiRightArrow } from "react-icons/bi";
import Header from "./Header";
import Card from "./project/Card";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import ButtonMailto from "./MailLink";
import Info from "./Info";
import AboutMe from "./AboutMe";
import Projects from "./project/Projects";
import Contact from "./Contact";

export default function Main (){
    return (
      <>
        <div className="sticky top-0 backdrop-blur-lg z-20">
          <Header />
        </div>

        <div className="w-8/12 mx-auto">
          <Info />
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <AboutMe />
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <Projects />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <Contact />
        </div>

        {/* ////////////////////////////////////////////////////////////// */}
        <div className="fixed bottom-0 flex gap-5 flex-col items-center left-14 animate-fadeIn">
          <a href="https://github.com/0205Ankit" target="_blank">
            <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl hover:translate-y-[-3px] transition-all ease-in" />
          </a>
          <a href="https://www.instagram.com/ankit__singh.as/" target="_blank">
            <LuInstagram className="text-gray-300 hover:text-violet-500 text-2xl hover:translate-y-[-3px] transition-all ease-in" />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-singh-58304221b/"
            target="_blank"
          >
            <LuLinkedin className="text-gray-300 hover:text-violet-500 text-2xl hover:translate-y-[-3px] transition-all ease-in" />
          </a>
          <div className="h-[100px] w-[1px] border-[0.5px] border-gray-300 " />
        </div>
        {/* /////////////////////////////////////////////////////////////////////// */}
        <div className="fixed bottom-0 flex flex-col gap-[125px] items-center -right-14 animate-fadeIn">
          <div className="text-gray-300 hover:text-violet-500 text-sm rotate-90 hover:translate-y-[-3px] tracking-[3px] transition-all ease-in">
            <ButtonMailto
              label="ankitbisht0205@gmail.com"
              mailto="ankitbisht0205@gmail.com"
            />
          </div>
          <div className="h-[100px] w-[1px] border-[0.5px] border-gray-300 " />
        </div>
      </>
    );
}