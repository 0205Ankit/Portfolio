"use client";
import { PropsWithRef, useRef } from "react";
import { BiRightArrow } from "react-icons/bi";
import { useInViewport } from "react-in-viewport";

export default function AboutMe() {
  const myRef = useRef();
  const { inViewport, leaveCount } = useInViewport(myRef);

  return (
    <div
      id="aboutMe"
      ref={myRef}
      className="mt-[300px] w-10/12 max-md:w-full max-md:mt-[200px] mx-auto"
    >
      <div
        className={`text-2xl text-gray-300 font-semibold flex gap-3 items-center ${
          inViewport && leaveCount === 0 && "animate-fadeUp1"
        }`}
      >
        <span className="text-violet-500 text-xl">01.</span>
        <span className="whitespace-nowrap">About Me</span>
        <div className="h-[0.1px] w-full border-[0.1px] border-gray-500 "></div>
      </div>
      <div className={`mt-10 text-gray-300 flex gap-5 max-md:flex-col max-md:text-sm`}>
        <div className="w-[60%] max-md:w-full">
          <p
            className={`${inViewport && leaveCount === 0 && "animate-fadeUp2"}`}
          >
            Hello! My name is Ankit and I enjoy creating things that live on the
            internet. My interest in web development started 3 years ago in
            freshman year of my college, I first started with basic HTML & CSS
            and work my way through technologies, currently i am working with
            following stack.
          </p>
          <p
            className={`mt-4 ${
              inViewport && leaveCount === 0 && "animate-fadeUp3"
            }`}
          >
            My main focus these days is building personal projects which
            challenges me and help me learn new technologies
          </p>
          <p
            className={`mt-4 ${
              inViewport && leaveCount === 0 && "animate-fadeUp4"
            }`}
          >
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
        <div
          className={`w-[40%] max-md:w-full h-fit grid grid-cols-2 gap-2 ${
            inViewport && leaveCount === 0 && "animate-fadeUp4"
          }`}
        >
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
            Redux
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
  );
}
