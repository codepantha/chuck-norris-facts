import React from "react";
import norris from '../assets/chuck-norris.png';


const Navbar = () => {
  return (
    <nav className="h-24 bg-primary text-secondaryContrast flex justify-start items-center px-4 mb-4 shadow-lg">
      <img alt="logo" src={norris} />
      <p className="text-2xl ml-2">ChuckJokes</p>
    </nav>
  );
};

export default Navbar;
