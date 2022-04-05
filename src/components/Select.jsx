import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Select = ({ category, categories, handleSelect }) => {
  return (
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-50 absolute top-1/2 right-2 transform -translate-y-1/2 text-secondaryContrast" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <select
        value={category}
        className="w-full h-20 outline-none bg-secondary dark:bg-lime-700 rounded-lg p-4 text-secondaryContrast cursor-pointer appearance-none shadow-lg"
        onChange={handleSelect}
      >
        {categories?.map((category) => (
          <option key={uuidv4()} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
