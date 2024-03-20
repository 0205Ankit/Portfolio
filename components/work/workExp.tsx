"use client";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Itaxeasy from "./itaxeasy";
import FalconAI from "./falconai";

const WorkExperience = () => {
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
        <span className="text-violet-500 text-xl">02.</span>
        <span className="whitespace-nowrap">Where I&apos;ve Worked</span>
        <div className="h-[0.1px] w-full border-[0.1px] border-gray-500 "></div>
      </div>
      <Tabs
        className="text-white flex gap-10 max-sm:gap-5 mt-10"
        defaultValue="falconai"
      >
        <TabsList className="flex flex-col gap-0">
          <TabsTrigger
            className="border-l-2 data-[state=active]:border-violet-500 data-[state=active]:text-white text-slate-400 border-slate-400 px-5 py-2 rounded-none"
            value="falconai"
          >
            FalconAI
          </TabsTrigger>
          <TabsTrigger
            className="border-l-2 data-[state=active]:border-violet-500 data-[state=active]:text-white text-slate-400 border-slate-400 px-5 py-2 rounded-none m-0"
            value="itaxeasy"
          >
            Itaxeasy
          </TabsTrigger>
        </TabsList>
        <div>
          <TabsContent value="falconai">
            <FalconAI />
          </TabsContent>
          <TabsContent value="itaxeasy">
            <Itaxeasy />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default WorkExperience;
