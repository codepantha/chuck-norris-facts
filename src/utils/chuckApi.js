export const fetchJoke = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();
  return joke;
};

export const searchJokes = async (query) => {
  const res = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );
  const data = await res.json();
  return data.result
};