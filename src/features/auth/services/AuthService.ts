import { fetch } from "@/features/auth/services/FetchService";
import { IEndpoints } from "@/features/auth/services/FetchService";
import z from "zod";

// Schemas
export const registerBodySchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("Invalid e-mail format."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character slong." }),
});
export type RegisterBodySchema = z.infer<typeof registerBodySchema>;

// Handler
export class AuthHandler {
  static async register(data: RegisterBodySchema) {
    return await fetch({
      ...authEndpoints.register,
      data,
    });
  }
  static async login(data: RegisterBodySchema) {
    return await fetch({
      ...authEndpoints.login,
      data,
    });
  }
}

// Endpoints
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
