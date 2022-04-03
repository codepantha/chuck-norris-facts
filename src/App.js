import React from "react";
import { Routes, Route } from "react-router-dom";
import Joke from "./components/Joke";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="font-body w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Joke />}></Route>
      </Routes>
    </main>
  );
}

export default App;
