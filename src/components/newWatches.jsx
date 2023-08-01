import React from "react";
import citizen from "../assets/citizen-1.jpg";
import gshock from "../assets/gshock-1.jpg";
import patek from "../assets/patekPhilippe-1.jpg";

export default function NewWatchesArea() {
  return (
    <div id="newWatchesArea" className="h-fit w-full">
      <div
        id="newInfoArea"
        className=" mt-20 flex h-40 flex-col justify-around  font-baseFont"
      >
        <h1 className="ml-20 text-3xl font-bold">
          Sevdiklerinizi Mutlu Edin...
        </h1>
        <p className="w-1/3">
          Sevdiklerinize olan bağlılığınızı ve onlarla olan özel anlarınızı daha
          da anlamlı kılmak adına, en yeni modellerimizi inceleyin.
        </p>
      </div>
      <div id="newWatchesImgArea" className="relative h-128">
        <div
          id="newWatch1"
          className="absolute left-80 top-1/2 h-80 w-56 -translate-y-1/2 bg-cover bg-center transition-all duration-300 hover:z-50 hover:h-96 hover:w-64"
          style={{
            backgroundImage: `url(${citizen})`,
          }}
        ></div>
        <div
          id="newWatch2"
          className="absolute left-[33rem] top-1/2 h-[22rem] w-64 -translate-y-1/2 bg-cover bg-center transition-all duration-300 hover:left-[32rem] hover:z-50 hover:h-[26rem] hover:w-72"
          style={{
            backgroundImage: `url(${gshock})`,
          }}
        ></div>
        <div
          id="newWatch3"
          className="absolute right-[19rem] top-1/2 h-[24rem] w-72 -translate-y-1/2 bg-cover bg-center transition-all duration-300 hover:z-50 hover:h-[28rem] hover:w-80"
          style={{
            backgroundImage: `url(${patek})`,
          }}
        ></div>
      </div>
    </div>
  );
}
