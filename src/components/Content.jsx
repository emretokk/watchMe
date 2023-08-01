import React from "react";
import Slider from "./slider";
import NewWatchesArea from "./newWatches";
import klasik from "../assets/klasik-1.jpg";
import spor from "../assets/spor-1.jpg";
import dijital from "../assets/dijital-1.jpg";
import akilli from "../assets/akilli-1.jpg";
import kadin from "../assets/kadin-1.jpg";
import cocuk from "../assets/cocuk-1.jpg";

function Item(props) {
  return (
    <div
      id={props.id}
      className="relative h-80 w-48 rounded-xl bg-opacity-50 bg-cover bg-center"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <div className="absolute bottom-0 flex h-12 w-full items-center justify-center rounded-b-xl bg-black bg-opacity-50">
        <p className="z-50 font-baseFont text-3xl font-bold text-white opacity-80">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <main className="flex w-full flex-col items-center px-20">
      <Slider />
      <NewWatchesArea />
      <div id="categoriesArea" className="h-fit w-full">
        <h1 className="ml-20 font-baseFont text-3xl">Categories</h1>
        <div
          id="categoriesItems"
          className="mt-10 flex h-96 w-full items-center justify-between"
        >
          <Item id="item1" img={klasik} desc="Klasik" />
          <Item id="item2" img={spor} desc="Spor" />
          <Item id="item3" img={dijital} desc="Digital" />
          <Item id="item4" img={akilli} desc="Smart" />
          <Item id="item5" img={kadin} desc="Woman" />
          <Item id="item6" img={cocuk} desc="Child" />
        </div>
      </div>
      <div className="h-96 w-full bg-red-300"></div>
    </main>
  );
}
