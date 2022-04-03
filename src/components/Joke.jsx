import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

const Joke = () => {
  const [joke, setJoke] = useState({});
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm] = useDebounce(search, 300);
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (search === "") getJoke();
  }, []);

  useEffect(() => {
    const searchJokes = async (query) => {
      try {
        const res = await fetch(
          `https://api.chucknorris.io/jokes/search?query=${query}`
        );
        const data = await res.json();
        setJokes(data.result);
        setError(null)
      } catch (error) {
        setError('error');
      }
    };
    if (!search.length) setError(null);
    else if (search.length < 3) setError('search query size must be between 3 and 120');
    else searchJokes(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <section className="px-4 w-full flex flex-col justify-center items-start">
      <Search search={search} setSearch={setSearch} />
      {!search ? (
        <article className="card">
          {error ? (
            <p className="error">{error}</p>
          ) : (
            <p className="tracking-wider text-primary">{joke.value}</p>
          )}
        </article>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        jokes?.map((joke) => (
          <article key={uuidv4()} className="card">
            <p className="tracking-wider text-primary">{joke.value}</p>
          </article>
        ))
      )}
      <button
        type="button"
        className="p-4 md:self-center shadow-md rounded-md bg-primary text-secondaryContrast outline-none cursor-pointer"
        onClick={getJoke}
      >
        More of chuck
      </button>
    </section>
  );
};

export default Joke;
