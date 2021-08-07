import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllBreeds } from "./utils/getBreeds";
import Results from "./Results";
import { IBreeds } from "./models/IRequests";
import Search from "./Search";

let allBreeds: IBreeds = {};

const App = () => {
  const [breeds, setBreeds] = useState({});

  useEffect(() => {
    void requestBreeds();
  }, []);

  async function requestBreeds() {
    allBreeds = await getAllBreeds();
    setBreeds(allBreeds);
  }

  function filterBreedsBySearch(searchTerm: string) {
    if (searchTerm.length === 0) {
      setBreeds(allBreeds);
    } else {
      const filtered = Object.entries(allBreeds)
        .filter((breed) => JSON.stringify(breed).includes(searchTerm))
        .reduce((obj, [key]) => {
          obj[key] = allBreeds[key];
          return obj;
        }, {});
      setBreeds(filtered);
    }
  }

  return (
    <div className="center-column">
      <Search filterBreedsBySearch={filterBreedsBySearch} />
      <Results breeds={breeds} />
    </div>
  );
};

export default App;
