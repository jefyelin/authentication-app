"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export interface LoginResponse {
  error?: string;
  success?: string;
}

export const login = async (
  data: z.infer<typeof LoginSchema>,
): Promise<LoginResponse> => {
  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  return {
    success: "Email sent!",
  };
};
