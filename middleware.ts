import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { redirectToTaxisLogin } from "./utils/taxis-auth";

export function middleware(request: NextRequest) {
  const isProduction = process.env.NODE_ENV == "production" ? true : false;
  const baseURLDev: string = process.env.TAXIS_BASE_URL_DEV || "";
  const baseURLProd: string = process.env.TAXIS_BASE_URL_PROD || "";
  const baseURL = isProduction ? baseURLProd : baseURLDev;

  const taxisRedirect = redirectToTaxisLogin(baseURL);

  if (request.nextUrl.pathname === "/taxis-login") {
    console.log("Taxis login route accessed");
    return NextResponse.redirect(new URL(taxisRedirect));
  }

  // If not the specified path, proceed as usual
  return NextResponse.next();
}

// Specify the paths that this middleware should run on
export const config = {
  matcher: "/:path*", // Matches all paths
};
