import React, { useEffect, useState } from "react";
import {
  RiSearchLine,
  RiUser3Line,
  RiShoppingBasketLine,
} from "react-icons/ri";

export default function Header() {
  const [visible, setVisible] = useState(true);
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
      } sticky flex h-20 w-full justify-between bg-no1 px-20 font-baseFont font-bold text-no5 transition-all duration-500`}
    >
      <div id="leftHeader" className="flex w-96 items-center ">
        <div
          id="newWatches"
          className="flex h-full w-fit items-center justify-center"
        >
          <button className="h-fit w-fit hover:cursor-pointer">
            <h2>New Watches</h2>
          </button>
        </div>
        <div
          id="categories"
          className="ml-8 flex h-full w-fit items-center justify-center"
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
