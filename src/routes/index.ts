/**
 * An array of routes that are public.
 * These routes do not require authentication.
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are private.
 * These routes require authentication.
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * The prefix for all API authentication routes.
 * Routes that start with this prefix are used for API authentication.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after a successful login.
 */
export const DEFAULT_LOGIN_REDIRECT_URL = "/settings";
