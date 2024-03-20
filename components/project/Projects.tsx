"use client";
import { useRef } from "react";
import Card from "./Card";
import { useInViewport } from "react-in-viewport";
import { LuLink, LuGithub } from "react-icons/lu";
import NetflixClone from "./netflix-clone";
import ChatFrame from "./chatFrame";

export default function Projects() {
  const myRef = useRef();
  const secondRef = useRef();
  const { inViewport, leaveCount } = useInViewport(myRef);
  const { inViewport: second, leaveCount: secondCount } =
    useInViewport(secondRef);

  return (
    <div id="project" ref={myRef}>
      <div
        className={`text-2xl text-gray-300 font-semibold mt-[200px] flex gap-3 items-center ${
          inViewport && leaveCount === 0 && "animate-fadeUp1"
        } `}
      >
        <span className="text-violet-500 text-xl">03.</span>
        <span className="whitespace-nowrap">Projects</span>
        <div className="h-[0.1px] w-full border-[0.1px] border-gray-500 "></div>
      </div>

      <ChatFrame inViewport={inViewport} leaveCount={leaveCount} />

      <div ref={secondRef} className="max-md:mt-20 mt-[200px] ">
        <NetflixClone inViewport={second} leaveCount={secondCount} />
      </div>
    </div>
  );
}
