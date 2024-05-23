import React from "react";
import Card from "./Card";
import { LuGithub, LuLink } from "react-icons/lu";

const NetflixClone = ({
  inViewport,
  leaveCount,
}: {
  inViewport: boolean;
  leaveCount: number;
}) => {
  return (
    <div>
      <div className="relative max-md:hidden">
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
        <div className="min-w-[47%] max-w-[47%] absolute top-2/4 right-0 -translate-y-2/4 z-10">
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
      <div className="bg-darkGrey rounded-md py-10 px-10 md:hidden max-[400px]:px-5">
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
    </div>
  );
};

export default NetflixClone;
