"use client";
import Loading from "../components/Loading";
import Main from "../components/Main";
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("block");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay("hidden");
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className={`${display==="hidden"?"block":"hidden"}`}>
        <Main />
      </div>
      <div className={`z-10 w-screen h-screen bg-[#000] ${display}`}>
        <Loading />
      </div>
    </>
  );
}
