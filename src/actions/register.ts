"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
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

  const { email, name, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in use",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification token email

  return {
    success: "Account created!",
  };
};
