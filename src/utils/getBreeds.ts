import { IAllBreedsRequest, IBreeds } from "../models/IRequests";

export async function getAllBreeds(): Promise<IBreeds> {
  const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const json: IAllBreedsRequest = await res.json();
  if (!json.status) {
    throw new Error("Did not successfully get breeds");
  }
  return json.message;
}
