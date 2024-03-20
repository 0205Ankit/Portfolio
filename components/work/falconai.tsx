import Link from "next/link";
import React from "react";

const FalconAI = () => {
  return (
    <div>
      <h1 className="text-2xl max-sm:text-lg font-semibold tracking-wide">
        Software Developer (Intern){" "}
        <Link
          target="_blank"
          className="text-violet-500"
          href="https://falconai.in/"
        >
          @falconAI
        </Link>
      </h1>
      <p className="text-xs text-slate-400 font-medium">Oct 2023 - Jan 2024</p>
      <ul className="list-disc text-slate-400 my-5 space-y-2 max-sm:text-sm">
        <li>
          Contributed to feature development and bug resolution in both frontend
          and backend using Next.js and Prisma
        </li>
        <li>
          Built AI services with Next.js, Prisma, and OpenAI API in
          collaboration with LangChain
        </li>
        <li>
          Wrote maintainable code in the Next.js and Prisma stack, ensuring
          scalability for future expansion.
        </li>
        <li>
          Committed to continuous learning, adapting to new technologies daily
          to stay at the forefront of industry trends.
        </li>
      </ul>
    </div>
  );
};

export default FalconAI;
