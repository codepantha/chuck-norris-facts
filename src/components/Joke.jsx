import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";
import { fetchCategories, fetchJoke, fetchRandomJokeInACategory, searchJokes } from "../utils/chuckApi";
import Button from "./Button";
import Select from "./Select";
import { GiHighKick } from 'react-icons/gi';

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
    <section className="px-4 h-full w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 md:gap-6">
        <Search search={search} setSearch={setSearch} />
        <Select category={category} categories={categories} handleSelect={handleSelect} />
      </div>
      {!search ? (
        <article className="card dark:bg-slate-700">
          {error ? (
            <p className="error">{error}</p>
          ) : (
            <p className="tracking-wider text-primary dark:text-secondaryContrast">{joke.value}</p>
          )}
        </article>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        jokes?.map((joke) => (
          <article key={uuidv4()} className="card dark:bg-slate-700">
            <p className="tracking-wider text-primary dark:text-secondaryContrast">{joke.value}</p>
          </article>
        ))
      )}
      <Button moreButton={moreButton} setMoreButton={setMoreButton}>
        More of chuck <GiHighKick size={40} />
      </Button>
    </section>
  );
};

export default Joke;
