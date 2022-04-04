import React from "react";
import Joke from "./components/Joke";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="font-body w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Joke />
    </main>
  );
}

export default App;
