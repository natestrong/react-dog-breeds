import { IBreedImageRequest } from "../models/IRequests";

export async function getBreedImage(breed): Promise<string> {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const json: IBreedImageRequest = await res.json();

  if (!json.status) {
    throw new Error("Image could not be retrieved.");
  }
  return json.message;
}
