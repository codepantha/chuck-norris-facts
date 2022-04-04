import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";
import { fetchCategories, fetchJoke, fetchRandomJokeInACategory, searchJokes } from "../utils/chuckApi";
import Button from "./Button";
import Select from "./Select";

const Joke = () => {
  const [joke, setJoke] = useState({});
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm] = useDebounce(search, 300);
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [moreButton, setMoreButton] = useState(false);

  const getJoke = async () => {
    try {
      const res = await fetchJoke();
      setJoke(res);
    } catch (error) {
      setError(error);
    }
  };

  const getRandomJokeInACategory = async (category) => {
    try {
      const res = await fetchRandomJokeInACategory(category);
      setJoke(res);
    } catch (error) {
      setError(error);
    }
  }

  const handleSelect = (e) => {
    setCategory(e.target.value);
    setSearch('');
  };

  useEffect(() => {
    if (category) getRandomJokeInACategory(category);
    else if (search === "") getJoke();

    const getCategories = async () => {
      try {
        const res = await fetchCategories();
        setCategories(res);
      } catch (error) {
        setError(error);
      }
    };
    getCategories();
  }, [search, category, moreButton]);

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
      <Select category={category} categories={categories} handleSelect={handleSelect} />
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
      <Button type="button" className="more-chuck" moreButton={moreButton} setMoreButton={setMoreButton}>
        More of chuck
      </Button>
    </section>
  );
};

export default Joke;
