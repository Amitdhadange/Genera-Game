import React, { useContext, useEffect, useState } from "react";
import logo from "./../Assets/Images/logo.png";
import { HiMiniMagnifyingGlass, HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
const Header = () => {
  // const [toggle, setToggle] = useState(true);
  const {theme,setTheme}=useContext(ThemeContext)

  useEffect(()=>{
    console.log("Theme",theme)
  },[])
  return (
    <div>
      <div className="flex justify-between items-center shadow-lg p-2">
        <img src={logo} className="w-16 h-16" />
        <div className="w-full mx-2 rounded-3xl flex items-center bg-slate-200 py-2">
          <HiMiniMagnifyingGlass className="ml-2 text-lg" />
          <input
            type="text"
            placeholder="Search Game"
            className=" bg-transparent px-2 outline-none ml-4 font-serif font-bold"
          />
        </div>
        <div className="bg-slate-200 p-2 rounded-3xl">
          {theme=='light' ? (
            <HiMiniMoon
              className="text-2xl cursor-pointer text-slate-900"
              onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
            />
          ) : (
            <HiMiniSun
              className="text-2xl cursor-pointer text-yellow-500 "
              onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
