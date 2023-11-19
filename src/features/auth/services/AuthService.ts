import { Fetch } from "@/features/auth/services/FetchService";
import { IEndpoints } from "@/features/auth/services/FetchService";
import z from "zod";

const registerBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type RegisterBodySchema = z.infer<typeof registerBodySchema>;

export class AuthHandler extends Fetch {
  static async register(data: RegisterBodySchema) {
    const { url, method } = authEndpoints.register;

    const response = await this.fetch({
      url,
      method,
      data: {
        body: data,
      },
    });

    return response;
  }
  static async login(data: RegisterBodySchema) {
    const { url, method } = authEndpoints.register;

    const response = await this.fetch({
      url,
      method,
      data: {
        body: data,
      },
    });

    return response;
  }
}

const authEndpoints: IEndpoints = {
  register: {
    url: "http://localhost:3333/auth/register",
    method: "post",
  },
  login: {
    url: "http://localhost:3333/auth/login",
    method: "post",
  },
};
