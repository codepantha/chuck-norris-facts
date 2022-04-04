import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";
import { fetchJoke, searchJokes } from "../utils/chuckApi";
import Button from "./Button";

const Joke = () => {
  const [joke, setJoke] = useState({});
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm] = useDebounce(search, 300);
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    try {
      const res = await fetchJoke();
      setJoke(res);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (search === "") getJoke();
  }, []);

  useEffect(() => {
    if (!search.length) setError(null);
    else if (search.length < 3)
      setError("search query size must be between 3 and 120");
    else {
      searchJokes(debouncedSearchTerm)
        .then((res) => {
          setJokes(res);
          setError(null);
        })
        .catch((error) => setError(error));
    }
  }, [debouncedSearchTerm, search.length]);

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
      <Button type="button" className="more-chuck" getJoke={getJoke}>
        More of chuck
      </Button>
    </section>
  );
};

export default Joke;
