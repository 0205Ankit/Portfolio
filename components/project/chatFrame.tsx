import React from "react";
import Card from "./Card";
import { LuGithub, LuLink } from "react-icons/lu";

const ChatFrame = ({
  inViewport,
  leaveCount,
}: {
  inViewport: boolean;
  leaveCount: number;
}) => {
  return (
    <div>
      <div className="relative mt-20 max-md:hidden">
        <div
          className={`${
            inViewport && leaveCount === 0 && "animate-slideRight1"
          }`}
        >
          <Card
            gitLink="https://github.com/0205Ankit/ChatFrame"
            liveLink="https://chat-frame-coral.vercel.app/"
            name="ChatFrame"
            url="/chatframe.png"
            alignRight
          />
        </div>
        <div className="min-w-[47%] max-w-[47%] absolute top-2/4 left-0 -translate-y-2/4 z-10">
          <p
            className={`text-violet-500 ${
              inViewport && leaveCount === 0 && "animate-slideLeft1"
            }`}
          >
            Featured Project
          </p>
          <h1
            className={`text-gray-300 text-2xl font-semibold mt-1 ${
              inViewport && leaveCount === 0 && "animate-slideLeft2"
            }`}
          >
            ChatFrame
          </h1>
          <div
            className={`py-4 px-5 rounded-md bg-darkGrey mt-4 text-gray-300 ${
              inViewport && leaveCount === 0 && "animate-slideLeft3"
            }`}
          >
            A full-stack chat application with one-to-one and group chat
            functionality, along with in-app real-time notifications.
            Additionally, it has all the basic functionality of a social media
            application.
          </div>
          <div
            className={`flex gap-2 tracking-[1.2px] text-gray-300 text-xs mt-4 ${
              inViewport && leaveCount === 0 && "animate-slideLeft4"
            } `}
          >
            <span>Nextjs</span>
            <span>Socket.io</span>
            <span>Express.js</span>
            <span>TRPC</span>
            <span>Prisma</span>
            <span>Supabase</span>
            <span>ShadcnUI</span>
          </div>
          <div
            className={`flex gap-3 mt-3 ${
              inViewport && leaveCount === 0 && "animate-slideLeft5"
            }`}
          >
            <a href="https://github.com/0205Ankit/ChatFrame" target="_blank">
              <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl" />
            </a>
            <a href="https://chat-frame-coral.vercel.app/" target="_blank">
              <LuLink className="text-gray-300 hover:text-violet-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////// mobile-screen */}
      <div className="bg-darkGrey rounded-md mt-10 py-10 px-10 md:hidden max-[400px]:px-5 ">
        <p
          className={`text-violet-500 ${
            inViewport && leaveCount === 0 && "animate-slideRight1"
          }`}
        >
          Featured Project
        </p>
        <h1
          className={`text-gray-300 text-2xl font-semibold mt-1 ${
            inViewport && leaveCount === 0 && "animate-slideRight2"
          }`}
        >
          ChatFrame
        </h1>
        <p
          className={`rounded-md bg-darkGrey mt-4 text-gray-300 text-[15px] ${
            inViewport && leaveCount === 0 && "animate-slideRight3"
          }`}
        >
          A full-stack chat application with one-to-one and group chat
          functionality, along with in-app real-time notifications.
          Additionally, it has all the basic functionality of a social media
          application.
        </p>
        <div
          className={`flex gap-2 tracking-[1px] text-gray-300 justify-end text-xs flex-wrap mt-5 ${
            inViewport && leaveCount === 0 && "animate-slideRight4"
          }`}
        >
          <span>Nextjs</span>
          <span>Socket.io</span>
          <span>Express.js</span>
          <span>TRPC</span>
          <span>Prisma</span>
          <span>Supabase</span>
          <span>ShadcnUI</span>
        </div>
        <div
          className={`flex gap-3 justify-end mt-3 ${
            inViewport && leaveCount === 0 && "animate-slideRight5"
          }`}
        >
          <a href="https://github.com/0205Ankit/ChatFrame" target="_blank">
            <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl" />
          </a>
          <a href="https://chat-frame-coral.vercel.app/" target="_blank">
            <LuLink className="text-gray-300 hover:text-violet-500 text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatFrame;
