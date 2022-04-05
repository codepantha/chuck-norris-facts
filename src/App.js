import React, { useEffect, useState } from "react";
import Joke from "./components/Joke";
import Navbar from "./components/Navbar";

function App() {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme ? savedTheme : 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])
  
  return (
    <main className={`font-body w-full min-h-screen overflow-x-hidden ${theme === 'light' ? 'dark' : 'light'}`}>
      <div className="dark:bg-slate-800 min-h-screen">
        <Navbar theme={theme} setTheme={setTheme} />
        <Joke />
      </div>
    </main>
  );
}

export default App;
