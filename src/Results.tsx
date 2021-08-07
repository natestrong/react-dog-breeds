import { FunctionComponent } from "react";
import { IBreeds } from "./models/IRequests";
import { Breed } from "./Breed";

const imageCache = new Map<string, string>();

const Results: FunctionComponent<{ breeds: IBreeds }> = ({ breeds }) => {
  function imageLoadedCb(breed, image) {
    imageCache.set(breed, image);
  }

  return (
    <div className="breed-results">
      {!Object.keys(breeds) ? (
        <h1>No Breeds Found</h1>
      ) : (
        Object.entries(breeds).map(([breed, subBreeds]) => {
          return (
            <Breed
              key={breed}
              breed={breed}
              imageCache={imageCache}
              imageLoadedCb={imageLoadedCb}
              subBreeds={subBreeds}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
