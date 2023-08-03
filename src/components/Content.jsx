import React from "react";
import Slider from "./slider";
import NewWatchesArea from "./newWatches";
import klasik from "../assets/klasik-1.jpg";
import spor from "../assets/spor-1.jpg";
import dijital from "../assets/dijital-1.jpg";
import akilli from "../assets/akilli-1.jpg";
import kadin from "../assets/kadin-1.jpg";
import cocuk from "../assets/cocuk-1.jpg";
import casio from "../assets/casio.png";
import citizen from "../assets/citizen.png";
import daniel from "../assets/daniel.png";
import gucci from "../assets/gucci.png";
import polo from "../assets/polo.png";
import seiko from "../assets/seiko.png";
import swatch from "../assets/swatch.png";
import tissot from "../assets/tissot.png";

function Brand(props) {
  return (
    <div className="flex items-center justify-center rounded-full p-2">
      <div
        className="h-28 w-28 bg-contain bg-center bg-no-repeat duration-500 hover:h-36 hover:w-36 hover:cursor-pointer"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      ></div>
    </div>
  );
}

function Item(props) {
  return (
    <div
      id={props.id}
      className="relative h-80 w-48 rounded-xl bg-cover bg-center duration-500 hover:h-96 hover:w-56 hover:cursor-pointer"
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
        <h1 className="ml-20 font-baseFont text-3xl font-bold">
          Categories for Every Taste and Need
        </h1>
        <div
          id="categoriesItems"
          className="mt-10 flex h-96 w-full items-center justify-between"
        >
          <Item id="item1" img={klasik} desc="Classic" />
          <Item id="item2" img={spor} desc="Sport" />
          <Item id="item3" img={dijital} desc="Digital" />
          <Item id="item4" img={akilli} desc="Smart" />
          <Item id="item5" img={kadin} desc="Woman" />
          <Item id="item6" img={cocuk} desc="Child" />
        </div>
      </div>
      <div id="brandsArea" className="h-fit w-full">
        <h1 className="ml-20 mt-20 font-baseFont text-3xl font-bold">
          Brands Galore: Explore the Finest Selection of Top-notch Names
        </h1>

        <div
          id="brandsContainer"
          className="flex h-40 w-full items-center justify-between"
        >
          <Brand img={casio} />
          <Brand img={citizen} />
          <Brand img={daniel} />
          <Brand img={gucci} />
          <Brand img={polo} />
          <Brand img={seiko} />
          <Brand img={swatch} />
          <Brand img={tissot} />
        </div>
      </div>
    </main>
  );
}
