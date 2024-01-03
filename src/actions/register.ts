"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export interface RegisterResponse {
  error?: string;
  success?: string;
}

export const register = async (
  data: z.infer<typeof RegisterSchema>,
): Promise<RegisterResponse> => {
  const validatedFields = RegisterSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  return {
    success: "Email sent!",
  };
};
