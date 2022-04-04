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

export const fetchCategories = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/categories')
  const categories = await res.json();
  return categories;
}

export const fetchRandomJokeInACategory = async (category) => {
  const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
  const joke = await res.json();
  return joke;
}
