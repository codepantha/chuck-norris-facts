import React, { useEffect, useState } from 'react'

const Joke = () => {
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(null);

  const getJoke = async() => {
    try {
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await res.json();
      setJoke(data);
    } catch(error) {
      setError(error);
    }
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <section className="px-4 w-full flex flex-col justify-center items-start">
      <article className="mt-10 mb-10 md:w-3/4 px-4 py-5 shadow-md rounded md:self-center bg-secondaryContrast">
        {error ? (
          <p>{error}</p>
        ) : (
          <p className="tracking-wider text-primary">{joke.value}</p>
        )}
      </article>
      <button type="button" className="p-4 md:self-center shadow-md rounded-md bg-primary text-secondaryContrast outline-none cursor-pointer" onClick={getJoke}>More of chuck</button>
    </section>
  )
}

export default Joke