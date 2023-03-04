import { useMutation } from "@tanstack/react-query";
import { SuccessResponse } from "../types/Api";
import bumpiApi from "./axios";

interface Params {
  username: string;
}

const createUser = async (payload: Params) => {
  const { data } = await bumpiApi.post<SuccessResponse>("/users", payload);
  if (!data.success) throw new Error();
  return data;
};

export const useCreateUser = () => {
  return useMutation(createUser);
};
