"use client";
import { useRef } from "react";
import Card from "./Card";
import { useInViewport } from "react-in-viewport";
import { LuLink, LuGithub } from "react-icons/lu";

export default function Projects() {
  const myRef = useRef();
  const secondRef = useRef();
  const { inViewport, leaveCount } = useInViewport(myRef);
  const { inViewport: second, leaveCount: secondCount } =useInViewport(secondRef);

    console.log(second);

  return (
    <div id="project" ref={myRef}>
      <div
        className={`text-2xl text-gray-300 font-semibold mt-[200px] flex gap-3 items-center ${
          inViewport && leaveCount === 0 && "animate-fadeUp1"
        } `}
      >
        <span className="text-violet-500 text-xl">02.</span>
        <span className="whitespace-nowrap">Projects</span>
        <div className="h-[0.1px] w-full border-[0.1px] border-gray-500 "></div>
      </div>
      <div className="relative mt-20 max-md:hidden">
        <div
          className={`${
            inViewport && leaveCount === 0 && "animate-slideLeft1"
          }`}
        >
          <Card
            gitLink="https://github.com/0205Ankit/clone-netflix"
            liveLink="https://clone-netflix-three-omega.vercel.app/profile"
            name="Netflix Clone"
            url="/netflix.png"
          />
        </div>
        <div className="min-w-[50%] max-w-[50%] absolute top-2/4 right-0 -translate-y-2/4 z-10">
          <p
            className={`text-violet-500 text-right ${
              inViewport && leaveCount === 0 && "animate-slideRight1"
            }`}
          >
            Featured Project
          </p>
          <h1
            className={`text-gray-300 text-right text-2xl font-semibold mt-1 ${
              inViewport && leaveCount === 0 && "animate-slideRight2"
            }`}
          >
            Netflix-Clone
          </h1>
          <div
            className={`py-4 px-5 text-right rounded-md bg-darkGrey mt-4 text-gray-300 ${
              inViewport && leaveCount === 0 && "animate-slideRight3"
            }`}
          >
            A Netflix Clone, Created using React. You can watch Trailers of
            recent Movies & Tv Shows, One user can have upto 5 profiles.{" "}
            <a
              className="text-violet-500"
              href="https://developer.themoviedb.org/docs/getting-started"
              target="_blank"
            >
              The MovieDB API
            </a>{" "}
            is used for fetching the latest Movie & Tv Shows, Firebase is used
            as backend.
          </div>
          <div
            className={`flex gap-4 tracking-[1.5px] text-gray-300 justify-end text-sm mt-4 ${
              inViewport && leaveCount === 0 && "animate-slideRight4"
            }`}
          >
            <span>React</span>
            <span>Redux</span>
            <span>Firebase</span>
            <span>Styled Components</span>
          </div>
          <div
            className={`flex gap-3 justify-end mt-3 ${
              inViewport && leaveCount === 0 && "animate-slideRight5"
            }`}
          >
            <a
              href="https://github.com/0205Ankit/clone-netflix"
              target="_blank"
            >
              <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl" />
            </a>
            <a
              href="https://clone-netflix-three-omega.vercel.app/profile"
              target="_blank"
            >
              <LuLink className="text-gray-300 hover:text-violet-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////// mobile-screen */}
      <div className="bg-darkGrey rounded-md py-10 px-10 md:hidden max-[400px]:px-5 mt-10">
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
          Netflix-Clone
        </h1>
        <p
          className={`rounded-md bg-darkGrey mt-4 text-gray-300 text-[15px] ${
            inViewport && leaveCount === 0 && "animate-slideRight3"
          }`}
        >
          A Netflix Clone, Created using React. You can watch Trailers of recent
          Movies & Tv Shows, One user can have upto 5 profiles.{" "}
          <a
            className="text-violet-500"
            href="https://developer.themoviedb.org/docs/getting-started"
            target="_blank"
          >
            The MovieDB API
          </a>{" "}
          is used for fetching the latest Movie & Tv Shows, Firebase is used as
          backend.
        </p>
        <div
          className={`flex gap-2 tracking-[1px] text-gray-300 justify-end flex-wrap text-xs mt-5 ${
            inViewport && leaveCount === 0 && "animate-slideRight4"
          }`}
        >
          <span>React</span>
          <span>Redux</span>
          <span>Firebase</span>
          <span>Styled Components</span>
        </div>
        <div
          className={`flex gap-3 justify-end mt-3 ${
            inViewport && leaveCount === 0 && "animate-slideRight5"
          }`}
        >
          <a href="https://github.com/0205Ankit/clone-netflix" target="_blank">
            <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl" />
          </a>
          <a
            href="https://clone-netflix-three-omega.vercel.app/profile"
            target="_blank"
          >
            <LuLink className="text-gray-300 hover:text-violet-500 text-2xl" />
          </a>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div ref={secondRef} className="max-md:mt-20 mt-[200px] ">
        <div className="relative max-md:hidden">
          <div
            className={`${
              second && secondCount === 0 && "animate-slideRight1"
            }`}
          >
            <Card
              gitLink="https://github.com/0205Ankit/userLog"
              liveLink="https://user-log.vercel.app/"
              name="User Log"
              url="/userLog.png"
              alignRight
            />
          </div>
          <div className="min-w-[50%] max-w-[50%] absolute top-2/4 left-0 -translate-y-2/4 z-10">
            <p
              className={`text-violet-500 ${
                second && secondCount === 0 && "animate-slideLeft1"
              }`}
            >
              Featured Project
            </p>
            <h1
              className={`text-gray-300 text-2xl font-semibold mt-1 ${
                second && secondCount === 0 && "animate-slideLeft2"
              }`}
            >
              User-Log
            </h1>
            <div
              className={`py-4 px-5 rounded-md bg-darkGrey mt-4 text-gray-300 ${
                second && secondCount === 0 && "animate-slideLeft3"
              }`}
            >
              A simple CRUD app where u can manage log of users , You can Create
              , Update , Delete the users
            </div>
            <div
              className={`flex gap-2 tracking-[1.2px] text-gray-300 text-xs mt-4 ${
                second && secondCount === 0 && "animate-slideLeft4"
              } `}
            >
              <span>React</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>Tailwind</span>
              <span>Prisma</span>
              <span>AWS S3</span>
              <span>Radix UI</span>
            </div>
            <div
              className={`flex gap-3 mt-3 ${
                second && secondCount === 0 && "animate-slideLeft5"
              }`}
            >
              <a href="https://github.com/0205Ankit/userLog" target="_blank">
                <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl" />
              </a>
              <a href="https://user-log.vercel.app/" target="_blank">
                <LuLink className="text-gray-300 hover:text-violet-500 text-2xl" />
              </a>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////// mobile-screen */}
        <div className="bg-darkGrey rounded-md py-10 px-10 md:hidden max-[400px]:px-5 ">
          <p
            className={`text-violet-500 ${
              second && secondCount === 0 && "animate-slideRight1"
            }`}
          >
            Featured Project
          </p>
          <h1
            className={`text-gray-300 text-2xl font-semibold mt-1 ${
              second && secondCount === 0 && "animate-slideRight2"
            }`}
          >
            User-log
          </h1>
          <p
            className={`rounded-md bg-darkGrey mt-4 text-gray-300 text-[15px] ${
              second && secondCount === 0 && "animate-slideRight3"
            }`}
          >
            A simple CRUD app where u can manage log of users , You can Create ,
            Update , Delete the users
          </p>
          <div
            className={`flex gap-2 tracking-[1px] text-gray-300 justify-end text-xs flex-wrap mt-5 ${
              second && secondCount === 0 && "animate-slideRight4"
            }`}
          >
            <span>React</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Tailwind</span>
            <span>Prisma</span>
            <span>AWS S3</span>
            <span>Radix UI</span>
          </div>
          <div
            className={`flex gap-3 justify-end mt-3 ${
              second && secondCount === 0 && "animate-slideRight5"
            }`}
          >
            <a href="https://github.com/0205Ankit/userLog" target="_blank">
              <LuGithub className="text-gray-300 hover:text-violet-500 text-2xl" />
            </a>
            <a href="https://user-log.vercel.app/" target="_blank">
              <LuLink className="text-gray-300 hover:text-violet-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
