import { FunctionComponent, useEffect, useState } from "react";
import { IBreed } from "./models/IRequests";
import { getBreedImage } from "./utils/getBreedImage";

export const Breed: FunctionComponent<IBreed & any> = ({
  breed,
  subBreeds,
  imageCache,
  imageLoadedCb,
}) => {
  const [image, setImage] = useState("https://dog.ceo/img/dog-api-logo.svg");

  useEffect(() => {
    if (imageCache.has(breed)) {
      setImage(imageCache.get(breed));
    } else {
      void requestBreeds();
    }
  }, []);

  async function requestBreeds() {
    const image = await getBreedImage(breed);
    setImage(image);
    imageLoadedCb(breed, image);
  }

  return (
    <div className="breed-card">
      <div className="image-container">
        <img
          className="breed-image"
          src={image}
          alt={`a ${breed} dog`}
          loading="lazy"
        />
        <div className="image-fader"> </div>
      </div>

      <h1 className="header shadow">{breed}</h1>
      {subBreeds.length ? (
        <>
          <h3 className="subBreed-header shadow">Sub Breeds:</h3>
          <div className="subBreed-wrapper shadow">{subBreeds.join(", ")}</div>
        </>
      ) : null}
    </div>
  );
};
