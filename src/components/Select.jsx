import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Select = ({ category, categories, handleSelect }) => {
  return (
    <div className="w-full md:w-1/4 md:self-center">
      <select
        value={category}
        className="w-full outline-none bg-secondary rounded-lg p-4 text-secondaryContrast cursor-pointer"
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
