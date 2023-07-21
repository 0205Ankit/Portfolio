"use client";
import Loading from "../components/Loading";
import Main from "../components/Main";
import "./globals.css";
import { useEffect, useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  });
  // await wait();

  return <>{loading ? <Loading /> : <Main />}</>;
}
