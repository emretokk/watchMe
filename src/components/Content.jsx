import React from "react";
import Slider from "./slider";

export default function Content() {
  return (
    <main className="flex w-full flex-col bg-gradient-to-b from-no4 to-no1 px-20">
      <Slider />
      <div className="h-140 w-full bg-white"></div>
      <div className="h-140 w-full bg-black"></div>
      <div className="h-140 w-full bg-white"></div>
      <div className="h-140 w-full bg-black"></div>
      <div className="h-140 w-full bg-white"></div>
    </main>
  );
}
