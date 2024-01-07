import { DefaultSession } from "next-auth";

export enum UserRole {
  ADMIN,
  USER,
}

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
