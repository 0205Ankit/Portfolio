import Image from "next/image";

export default function Loading() {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="flex items-start w-fit gap-[5px] h-[50px] overflow-x-hidden overflow-y-hidden">
        <Image src="/A.png" alt="logo" width={50} height={50}></Image>
        <div className="relative">
          <div
            className={`text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500  text-xl font-extrabold flex flex-col gap-5 top-[5px] animate-cycle 
          tracking-[2.5px] max-md:tracking-[1.5px]`}
          >
            <span>Javascript</span>
            <span>React</span>
            <span>Express</span>
            <span>Typescript</span>
            <span>Tailwind</span>
            <span>Javascript</span>
          </div>
          {/* <div className="absolute top-0 w-full h-[50px]">
            <div className="blur-top" />
            <div className="blur-bottom" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
