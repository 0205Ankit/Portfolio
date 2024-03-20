import Link from "next/link";
import React from "react";

const Itaxeasy = () => {
  return (
    <div>
      <h1 className="text-2xl max-sm:text-lg font-semibold tracking-wide">
        Web Developer (Intern){" "}
        <Link
          target="_blank"
          className="text-violet-500"
          href="https://itaxeasy.com/"
        >
          @Itaxeasy
        </Link>
      </h1>
      <p className="text-xs text-slate-400 font-medium">Feb 2023 - Apr 2023</p>
      <ul className="list-disc text-slate-400 my-5 space-y-2 max-sm:text-sm">
        <li>
          Designed and developed dynamic and responsive web pages using
          TailwindCSS, React and Express.
        </li>
        <li>
          Worked with REST APIs to retrieve and display data from databases.
        </li>
        <li>Participated in creating an internal dashboard for management.</li>
        <li>
          Improved Websites performance and speed through optimization
          techniques.
        </li>
      </ul>
    </div>
  );
};

export default Itaxeasy;
