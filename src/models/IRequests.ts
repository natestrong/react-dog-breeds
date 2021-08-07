export interface IAllBreedsRequest {
  status: boolean;
  message: IBreeds;
}

export type IBreeds = { [breed: string]: string[] };

export interface IBreed {
  breed: string;
  subBreeds: string[];
  image?: string;
}
