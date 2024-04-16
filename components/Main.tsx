"use client";
import { BiRightArrow } from "react-icons/bi";
import Header from "./Header";
import Card from "./project/Card";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import ButtonMailto from "./MailLink";
import Info from "./Info";
import AboutMe from "./AboutMe";
import Projects from "./project/Projects";
import Contact from "./Contact";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import WorkExperience from "./work/workExp";

export default function Main() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="sticky top-0 backdrop-blur-lg z-20">
        <Header setSidebar={() => setSidebar(true)} />
      </div>

      <div className="w-8/12 mx-auto max-md:w-10/12">
        <Info />
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <AboutMe />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <WorkExperience />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Projects />
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Contact />
      </div>

      {/* ////////////////////////////////////////////////////////////// */}
      <div className="fixed bottom-0 flex gap-5 flex-col items-center left-14 animate-fadeIn max-md:hidden">
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
      <div className="fixed bottom-0 flex flex-col gap-[125px] items-center -right-14 animate-fadeIn max-md:hidden">
        <div className="text-gray-300 hover:text-violet-500 text-sm rotate-90 hover:translate-y-[-3px] tracking-[3px] transition-all ease-in">
          <ButtonMailto
            label="singhankit8066@gmail.com"
            mailto="singhankit8066@gmail.com"
          />
        </div>
        <div className="h-[100px] w-[1px] border-[0.5px] border-gray-300 " />
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////// sidebar */}
      {sidebar === true && (
        <div
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg z-[100] md:hidden"
          onClick={() => {
            setSidebar(false);
          }}
        >
          <div
            className={`w-[70%] bg-darkGrey fixed min-h-screen right-0 animate-enterFromRight`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-10 px-5">
              <MdClose
                className="text-3xl text-violet-500 float-right cursor-pointer"
                onClick={() => {
                  setSidebar(false);
                }}
              />
              <div className="mt-[150px] flex flex-col gap-10 text-xl items-center">
                <AnchorLink
                  offset="200"
                  href="#aboutMe"
                  onClick={() => setSidebar(false)}
                  className="flex flex-col items-center gap-2 "
                >
                  <span className="text-violet-500">01.</span>
                  <span className="text-gray-300 hover:text-violet-500">
                    About
                  </span>
                </AnchorLink>
                <AnchorLink
                  offset="200"
                  href="#project"
                  onClick={() => setSidebar(false)}
                  className="flex flex-col items-center gap-2 "
                >
                  <span className="text-violet-500">02.</span>
                  <span className="text-gray-300 hover:text-violet-500">
                    Projects
                  </span>
                </AnchorLink>
                <AnchorLink
                  offset="200"
                  href="#contact"
                  onClick={() => setSidebar(false)}
                  className="flex flex-col items-center gap-22"
                >
                  <span className="text-violet-500">03.</span>
                  <span className="text-gray-300 hover:text-violet-500">
                    Contact
                  </span>
                </AnchorLink>
                <a
                  href="/Ankit_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-5 border-[1.5px] w-fit rounded-md text-violet-500 border-violet-500"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
