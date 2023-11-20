import axios from "axios";
export type ServerError = {
  response: {
    data: {
      error: string;
    };
    statusCode: number;
  };
};

interface IFetchParams {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: object;
  params?: {
    [key: string]: string;
  };
}

export interface IEndpoints {
  [endpoint: string]: IFetchParams;
}

export async function fetch({ url, method, data, params }: IFetchParams) {
  const response = await axios[method](url + (params ?? ""), data);
  return response;
}
