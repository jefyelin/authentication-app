"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export interface LoginResponse {
  error?: string;
}

export const login = async (
  data: z.infer<typeof LoginSchema>,
): Promise<LoginResponse | undefined> => {
  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT_URL,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials",
          };
        default: {
          return {
            error: "Something went wrong",
          };
        }
      }
    }

    throw error;
  }
};
