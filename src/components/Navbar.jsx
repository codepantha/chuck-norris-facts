import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineArrowBackIos } from 'react-icons/md/'
import { AiTwotoneHome } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="h-24 bg-primary text-secondaryContrast flex justify-start items-center px-4">
      {location.pathname === "/" ? <AiTwotoneHome size={24} /> : <MdOutlineArrowBackIos size={24} />}
      {location.pathname.slice(1)}
    </nav>
  );
};

export default Navbar;
