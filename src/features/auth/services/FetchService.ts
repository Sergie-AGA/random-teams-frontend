import axios from "axios";

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

export class Fetch {
  static async fetch({ url, method, data, params }: IFetchParams) {
    const response = await axios[method](url + params, data);

    return response;
  }
}
