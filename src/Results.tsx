import { FunctionComponent } from "react";
import { IBreeds } from "./models/IRequests";
import { Breed } from "./Breed";

const Results: FunctionComponent<{ breeds: IBreeds }> = ({ breeds }) => {
  return (
    <div className="breed-results">
      {!Object.keys(breeds) ? (
        <h1>No Breeds Found</h1>
      ) : (
        Object.entries(breeds).map(([breed, subBreeds]) => {
          return <Breed key={breed} breed={breed} subBreeds={subBreeds} />;
        })
      )}
    </div>
  );
};

export default Results;
