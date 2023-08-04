import React, { useEffect, useState } from "react";
import {
  RiSearchLine,
  RiUser3Line,
  RiShoppingBasketLine,
  RiArrowUpSFill,
} from "react-icons/ri";

function Dropdown1(props) {
  return (
    <div
      id="dropdown1"
      className={`${
        props.visible ? "opacity-100" : "opacity-0"
      } absolute left-20 top-16 flex h-40 w-96 flex-col transition-opacity duration-500`}
    >
      <div className="relative h-4 w-full">
        <RiArrowUpSFill className={`absolute -top-[6px] h-8 w-8 text-no4`} />
      </div>
      <div className="h-full grow rounded-2xl bg-no4"></div>
    </div>
  );
}

function Dropdown2(props) {
  return (
    <div
      id="dropdown2"
      className={`${
        props.visible ? "opacity-100" : "opacity-0"
      } absolute left-32 top-16 flex h-40 w-96 flex-col transition-opacity duration-500`}
    >
      <div className="relative h-4 w-full">
        <RiArrowUpSFill
          className={`absolute -top-[6px] left-32 h-8 w-8 text-no4`}
        />
      </div>
      <div className="h-full grow rounded-2xl bg-no4"></div>
    </div>
  );
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [dropDown1Visible, setDropDown1Visible] = useState(false);
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
        >
          <button className="h-fit w-fit hover:cursor-pointer">
            <h2>Categories</h2>
          </button>
        </div>
        <div
          id="brands"
          className="ml-8 flex h-full w-fit items-center justify-center"
        >
          <button className="h-fit w-fit hover:cursor-pointer">
            <h2>Brands</h2>
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
