import { UserValues } from "../model";

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  numberOfRents: number;
  recentlyActive: string;
  totalAverageWeightRatings: number;
}

export type UserResponse = Omit<UserValues, "recentlyActive"> & {
  recentlyActive: string;
};

export type QueryParams = {
  page: number;
  size: number;
  q?: string;
};
