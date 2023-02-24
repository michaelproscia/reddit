import SubredditNav from "./SubredditNav";
import DarkMode from "./DarkMode";
import hamburger from "../assets/hamburger.svg";
import { useState, useEffect } from "react";

function Header({ setIsOpen }) {
  return (
    <header className="bg-slate-700 p-3 flex justify-between items-center mb-4 px-10">
      <h1 className="text-white font-bold text-2xl">
        Reddit<span className="text-blue-300">Lite</span>
      </h1>
      <div className="flex items-center gap-6">
        <DarkMode />

        <img
          src={hamburger}
          className="p-3 bg-white rounded max-h-12 shadow shadow-slate-500 hover:bg-slate-200 hover:cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
