"use client";

import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import ButtonMailto from "./MailLink";

export default function Contact() {
  const myRef = useRef();
  const { inViewport, leaveCount } = useInViewport(myRef);

  return (
    <>
      <div
        id="contact"
        ref={myRef}
        className="flex flex-col items-center w-6/12 max-md:w-full mx-auto mt-[200px] gap-4 mb-20"
      >
        <p
          className={`text-violet-500 text-center text-lg ${
            inViewport && leaveCount === 0 && "animate-fadeUp1"
          }`}
        >
          04. What&apos;s Next?
        </p>
        <h3
          className={`text-gray-200 text-6xl font-bold max-md:text-5xl ${
            inViewport && leaveCount === 0 && "animate-fadeUp2"
          }`}
        >
          Get In Touch
        </h3>
        <p
          className={`text-gray-300 text-center max-md:text-sm ${
            inViewport && leaveCount === 0 && "animate-fadeUp3"
          }`}
        >
          I’m currently looking for any new opportunities, so get in touch if
          you have something for me, Thanks.
        </p>
        <div
          className={`py-3 w-fit px-5 mt-7 font-medium border-[1.5px] rounded-md border-violet-500 text-violet-500 ${
            inViewport && leaveCount === 0 && "animate-fadeUp4"
          }`}
        >
          <ButtonMailto label="Say Hello" mailto="singhankit8066@gmail.com" />
        </div>
      </div>
    </>
  );
}
