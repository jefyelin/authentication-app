import NextAuth from "next-auth";
import authConfig from "@/auth/config";
import {
  DEFAULT_LOGIN_REDIRECT_URL,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isAuthRouteNotLoggedIn = isAuthRoute && !isLoggedIn;
  const isAuthenticated = isAuthRoute && isLoggedIn;
  const isNotLoggedInAndNotPublicRoute = !isLoggedIn && !isPublicRoute;

  if (isApiAuthRoute || isAuthRouteNotLoggedIn) return null;

  if (isAuthenticated) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl));
  }

  if (isNotLoggedInAndNotPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
