import { FunctionComponent } from "react";
import { IBreed } from "./models/IRequests";

export const Breed: FunctionComponent<IBreed> = ({ breed, subBreeds }) => {
  return (
    <div className="breed-card">
      <h1 className="header">{breed}</h1>

      {subBreeds.length ? (
        <>
          <h3 className="subBreed-header">Sub Breeds:</h3>
          <div className="subBreed-wrapper">{subBreeds.join(", ")}</div>
        </>
      ) : null}
      {/*<img src={image} alt={`a ${breed} dog`} />;*/}
    </div>
  );
};
