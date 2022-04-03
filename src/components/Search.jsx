import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <section className="w-full mb-5 md:w-3/4 h-20 bg-transparent md:self-center">
      <input type="text" name="search" autoFocus={true} className="outline-none border-b-2 border-l-2 border-r-2 bg-transparent border-gray-300 shadow-xl w-full h-full rounded-md px-2 text-primary" placeholder="Enter a search term" value={search} onChange={(e) => setSearch(e.target.value)} />
    </section>
  )
}

export default Search