import { BiRightArrow } from "react-icons/bi";
import Header from "./Header";
import Card from "./Card";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import ButtonMailto from "./MailLink";

export default function Main (){
    return (
      <>
        <Header />
        <div className="w-8/12 mx-auto">
          <div className="mt-[100px]">
            <p className="text-purple-500 tracking-[2px] animate-fadeUp1">
              Hi, my name is
            </p>
            <h1 className="text-gray-100 text-7xl font-bold mt-3 animate-fadeUp2">
              Ankit Singh.
            </h1>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-6xl font-semibold leading-[80px] animate-fadeUp3">
              I build things for the web.
            </h3>
            <p className="text-gray-300 max-w-[500px] mt-3 animate-fadeUp4">
              I’m a web developer specializing in building exceptional digital
              experiences and practical applications. Currently, I’m looking for
              an employment opportunity.
            </p>
            <button className="py-3 px-5 mt-7 font-medium border-[1.5px] rounded-md border-violet-500 text-violet-500 animate-fadeUp5">
              Check out my Resume!
            </button>
          </div>
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="mt-[300px]">
            <div className="text-2xl text-gray-300 font-semibold flex gap-3 items-center">
              <span className="text-violet-500 text-xl">01.</span>
              <span className="whitespace-nowrap">About Me</span>
              <div className="h-[0.1px] w-full border-[0.1px] border-gray-500 "></div>
            </div>
            <div className="mt-10 text-gray-300 flex gap-10">
              <div className="w-[60%]">
                <p>
                  Hello! My name is Ankit and I enjoy creating things that live
                  on the internet. My interest in web development started 3
                  years ago in freshman year of my college, I first started with
                  basic HTML & CSS and work my way through technologies,
                  currently i am working with following stack.
                </p>
                <p className="mt-2">
                  My main focus these days is building personal projects which
                  challenges me and help me learn new technologies
                </p>
                <p className="mt-2">
                  I have done an internship for 2 months at{" "}
                  <a
                    className="text-violet-500"
                    href="https://itaxeasy.com"
                    target="_blank"
                  >
                    itaxEasy
                  </a>{" "}
                  as a Web Dev Intern, where I contributed to the successful
                  management and enhancement of the application&apos;s frontend.
                </p>
              </div>
              <div className="w-[40%] h-fit grid grid-cols-2 gap-2">
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Javascript
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  React
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Next.js
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Tailwind
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Redux/Redux Toolkit
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Express.js
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  PostgreSQL
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Typescript
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  Firebase
                </p>
                <p className="flex gap-1 items-center">
                  <BiRightArrow className="text-violet-500" />
                  MongoDB
                </p>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="mt-[200px]">
            <div className="text-2xl text-gray-300 font-semibold flex gap-3 items-center">
              <span className="text-violet-500 text-xl">01.</span>
              <span className="whitespace-nowrap">Projects</span>
              <div className="h-[0.1px] w-full border-[0.1px] border-gray-500 "></div>
            </div>
            <div className="mt-10">
              <Card />
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
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