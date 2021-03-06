import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <section className="mb-5 h-20 bg-transparent w-full">
      <input
        type="text"
        name="search"
        autoFocus={true}
        className="outline-none border-b-2 border-l-2 border-r bg-transparent border-gray-600 dark:border-slate-500 shadow-lg w-full h-full rounded-md px-2 text-primary dark:text-secondaryContrast"
        placeholder="Enter a search term"
        value={search}
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
};

export default Search;
