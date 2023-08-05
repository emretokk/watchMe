import React, { useEffect, useState } from "react";
import {
  RiSearchLine,
  RiUser3Line,
  RiShoppingBasketLine,
  RiArrowUpSFill,
} from "react-icons/ri";

import citizen from "../assets/citizen.png";
import tissot from "../assets/tissot.png";
import seiko from "../assets/seiko.png";
import swatch from "../assets/swatch.png";

import gshock from "../assets/gshock-2.jpg";
import patek from "../assets/patekPhilippe-2.jpg";

function Dropdown1(props) {
  return (
    <div
      id="dropdown1"
      className={`${
        props.visible ? "opacity-100" : "-top-40 opacity-0"
      } absolute left-20 top-16 flex h-40 w-96 flex-col transition-opacity duration-300`}
    >
      <div className="relative h-4 w-full">
        <RiArrowUpSFill className={`absolute -top-[6px] h-8 w-8 text-no4`} />
      </div>
      <div className="flex h-full grow justify-between rounded-2xl bg-no4 font-baseFont">
        <div className="mt-4 h-20 w-20">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${patek})` }}
          ></div>
          <h2 className=" mt-2 text-center text-[0.7rem] text-white">
            Citizen Tsuyosa
          </h2>
        </div>
        <div className="mt-4 h-20 w-20">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${gshock})` }}
          ></div>
          <h2 className=" mt-2 text-center text-[0.7rem] text-white">
            G-Shock <br></br>GW-9500-1
          </h2>
        </div>
        <div className="mt-4 h-20 w-20">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${patek})` }}
          ></div>
          <h2 className=" mt-2 text-center text-[0.7rem] text-white">
            Patek Philippe 5270J-001
          </h2>
        </div>
        <div className="flex h-full w-20 items-center justify-center">
          <a href="#" className="text-white">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

function Dropdown2(props) {
  return (
    <div
      id="dropdown2"
      className={`${
        props.visible ? "opacity-100" : "-top-40 opacity-0"
      } absolute left-52 top-16 flex h-40 w-96 flex-col transition-opacity duration-300`}
    >
      <div className="relative h-4 w-full">
        <RiArrowUpSFill
          className={`absolute -top-[6px] left-8 h-8 w-8 text-no4`}
        />
      </div>
      <div className="flex h-full grow flex-col rounded-2xl bg-no4 font-baseFont text-white">
        <div
          id="categoryRow1"
          className="flex h-1/2 w-full items-center justify-around"
        >
          <h2>Classic</h2>
          <h2>Sport</h2>
          <h2>Digital</h2>
        </div>
        <div
          id="categoryRow2"
          className="flex h-1/2 w-full items-center justify-around"
        >
          <h2>Smart</h2>
          <h2>Woman</h2>
          <h2>Child</h2>
        </div>
      </div>
    </div>
  );
}

function Dropdown3(props) {
  return (
    <div
      id="dropdown2"
      className={`${
        props.visible ? "opacity-100" : "-top-40 opacity-0"
      } absolute left-80 top-16 flex h-40 w-96 flex-col transition-opacity duration-300`}
    >
      <div className="relative h-4 w-full">
        <RiArrowUpSFill
          className={`absolute -top-[6px] left-8 h-8 w-8 text-no4`}
        />
      </div>
      <div className="flex h-full grow justify-between rounded-2xl bg-no4">
        <div className="flex h-full w-1/4 flex-col justify-center gap-4">
          <div
            style={{
              backgroundImage: `url(${citizen})`,
            }}
            className="h-1/2 w-full bg-contain bg-center bg-no-repeat"
          ></div>
          <div
            style={{
              backgroundImage: `url(${tissot})`,
            }}
            className="h-1/2 w-full bg-contain bg-center bg-no-repeat"
          ></div>
        </div>
        <div className="flex h-full w-1/4 flex-col justify-center gap-4">
          <div
            style={{
              backgroundImage: `url(${seiko})`,
            }}
            className="h-1/2 w-full bg-contain bg-center bg-no-repeat"
          ></div>
          <div
            style={{
              backgroundImage: `url(${swatch})`,
            }}
            className="h-1/2 w-full bg-contain bg-center bg-no-repeat"
          ></div>
        </div>
        <div className="flex h-full w-1/4 items-center">
          <a href="#" className="text-white">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [dropDown1Visible, setDropDown1Visible] = useState(false);
  const [dropDown2Visible, setDropDown2Visible] = useState(false);
  const [dropDown3Visible, setDropDown3Visible] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${
        visible ? "top-0" : "-top-20"
      } sticky z-50 flex h-16 w-full justify-between bg-gradient-to-tr from-no4 to-no1 px-20 font-baseFont font-bold text-no5 transition-all duration-500 `}
    >
      <div id="leftHeader" className="flex w-96 items-center ">
        <div
          id="newWatches"
          className="flex h-full w-fit items-center justify-center"
          onMouseEnter={() => {
            setDropDown1Visible(true);
          }}
          onMouseLeave={() => {
            setDropDown1Visible(false);
          }}
        >
          <button className="h-fit w-fit hover:cursor-pointer">
            <h2>New Watches</h2>
          </button>
          <Dropdown1 visible={dropDown1Visible} />
        </div>
        <div
          id="categories"
          className="flex h-full w-fit items-center justify-center pl-8"
          onMouseEnter={() => {
            setDropDown2Visible(true);
          }}
          onMouseLeave={() => {
            setDropDown2Visible(false);
          }}
        >
          <button className="h-fit w-fit hover:cursor-pointer">
            <h2>Categories</h2>
            <Dropdown2 visible={dropDown2Visible} />
          </button>
        </div>
        <div
          id="brands"
          className="ml-8 flex h-full w-fit items-center justify-center"
          onMouseEnter={() => {
            setDropDown3Visible(true);
          }}
          onMouseLeave={() => {
            setDropDown3Visible(false);
          }}
        >
          <button className="h-fit w-fit hover:cursor-pointer">
            <h2>Brands</h2>
            <Dropdown3 visible={dropDown3Visible} />
          </button>
        </div>
      </div>
      <div id="midHeader" className="flex w-96 items-center justify-center">
        <div id="logoContainer">
          <h1>watchMe</h1>
        </div>
      </div>
      <div
        id="rightHeader"
        className="flex w-96 items-center justify-end text-no5"
      >
        <div
          id="search"
          className="flex h-full w-16 items-center justify-center"
        >
          <button className="icon h-fit w-fit hover:cursor-pointer">
            <RiSearchLine size={28} />
          </button>
        </div>
        <div
          id="account"
          className=" flex h-full w-16 items-center justify-center"
        >
          <button className="icon h-fit w-fit hover:cursor-pointer">
            <RiUser3Line size={28} />
          </button>
        </div>
        <div
          id="basket"
          className="flex h-full w-16 items-center justify-center"
        >
          <div className="icon h-fit w-fit hover:cursor-pointer">
            <RiShoppingBasketLine size={28} />
          </div>
        </div>
      </div>
    </header>
  );
}
