import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  return (
    <>
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
        <Image src="/A.png" alt="logo" width={50} height={50}></Image>
        <div className="flex gap-5 text-violet-500 text-[15px] items-center font-light">
          <AnchorLink offset="200" href="#aboutMe" className="group cursor-pointer animate-lay1">
            01.
            <span className="ml-2 text-gray-300  group-hover:text-violet-500">
              About
            </span>
          </AnchorLink>
          <AnchorLink offset="200" href="#project" className="group cursor-pointer animate-lay2">
            02.
            <span className="ml-2 text-gray-300 group-hover:text-violet-500">
              Projects
            </span>
          </AnchorLink>
          <AnchorLink offset="200" href="#contact" className="group cursor-pointer animate-lay3">
            03.
            <span className="ml-2 text-gray-300 group-hover:text-violet-500">
              Contact
            </span>
          </AnchorLink>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-5 border-[1.5px] rounded-md border-violet-500 animate-lay4"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
