import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="w-11/12 mx-auto my-10 flex justify-between items-center">
        <Image src="/A.png" alt="logo" width={50} height={50}></Image>
        <div className="flex gap-5 text-violet-500 text-[15px] items-center font-light">
          <p className="group cursor-pointer animate-lay1">
            01.
            <span className="ml-2 text-gray-300  group-hover:text-violet-500">
              About
            </span>
          </p>
          <p className="group cursor-pointer animate-lay2">
            02.
            <span className="ml-2 text-gray-300 group-hover:text-violet-500">
              Projects
            </span>
          </p>
          <p className="group cursor-pointer animate-lay3">
            03.
            <span className="ml-2 text-gray-300 group-hover:text-violet-500">
              Contact
            </span>
          </p>
          <button
            type="button"
            className="py-2 px-5 border-[1.5px] rounded-md border-violet-500 animate-lay4"
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
}
