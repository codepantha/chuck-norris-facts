import React from "react";
import norris from '../assets/chuck-norris.png';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';

const Navbar = ({ theme, setTheme }) => {

  const setThemeMode = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <nav className="h-24 bg-primary text-secondaryContrast flex justify-between items-center px-4 mb-4 shadow-lg">
      <div className="nav-left flex justify-start items-center">
        <img alt="logo" src={norris} />
        <p className="text-2xl ml-2">ChuckJokes</p>
      </div>
      <div className="nav-right">
        <button type="button" onClick={setThemeMode} className="border-2 p-2 shadow-slate-700 shadow-lg rounded-lg outline-none">
          {theme === 'light' ? <BsFillMoonStarsFill size={24} /> : <HiSun size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
