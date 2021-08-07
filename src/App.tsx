import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllBreeds } from "./utils/getBreeds";
import Results from "./Results";
import { IBreeds } from "./models/IRequests";

const Search = () => {
  // const [breed, setBreed] = useState("");
  // const breeds = [];

  return (
    <div className="search-container">
      <input className="search-input" placeholder="Search for pups" />
    </div>
  );
};

const App = () => {
  const [breeds, setBreeds] = useState({});

  useEffect(() => {
    void requestBreeds();
  }, []);

  async function requestBreeds() {
    const allBreeds: IBreeds = await getAllBreeds();
    setBreeds(allBreeds);
  }

  return (
    <div className="center-column">
      <Search />
      <Results breeds={breeds} />
    </div>
  );
};

export default App;
