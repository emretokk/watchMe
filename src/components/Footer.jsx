import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaStore,
  FaYoutube,
  FaHeadphones,
} from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className=" h-64 w-full bg-black text-white">
      <div id="footerHeader" className="flex h-24 w-full">
        <h1 className="m-auto font-baseFont text-3xl font-bold">watchMe</h1>
      </div>
      <div
        id="footerContent"
        className="flex h-40 w-full justify-around font-baseFont text-xl"
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1>Find Store</h1>
          <FaStore size={40} />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1>Contact Us</h1>
          <AiFillContacts size={40} />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1>Social Media</h1>
          <div className="flex">
            <FaInstagram size={28} />
            <FaTwitter size={28} />
            <FaFacebook size={28} />
            <FaYoutube size={28} />
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1>Help</h1>
          <FaHeadphones size={40} />
        </div>
      </div>
    </footer>
  );
}
