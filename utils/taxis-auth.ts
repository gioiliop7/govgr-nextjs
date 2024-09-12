import { TaxisProfile } from "./types";

// Environment variables or configuration

const clientId: string = process.env.TAXIS_CLIENT_ID || ""; // TaxisNet client ID
const clientSecret: string = process.env.TAXIS_CLIENT_SECRET || ""; // TaxisNet client secret
const redirectUri: string = process.env.REDIRECT_URI || "http://localhost"; // Update to your redirect URI
const scope: string = "read";
const responseType: string = "code";
const isProduction = process.env.NODE_ENV == "production" ? true : false;
const baseURLDev: string = process.env.TAXIS_BASE_URL_DEV || "";
const baseURLProd: string = process.env.TAXIS_BASE_URL_PROD || "";
const baseURL = isProduction ? baseURLProd : baseURLDev;

/**
 * Redirect to TaxisNet login for authorization
 */
export function redirectToTaxisLogin(baseURL: string): any {
  const authorizeUrl = `${baseURL}/oauth/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}`;
  return authorizeUrl;
}

/**
 * Handle the authorization callback from TaxisNet and fetch the access token
 */
export async function handleTaxisCallback(
  code: string
): Promise<string | null> {
  const tokenUrl = `${baseURL}/oauth/token`;
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
    redirect_uri: redirectUri,
    scope: scope,
  });

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
}

/**
 * Fetch user profile data from TaxisNet using the access token
 */
export async function getUserProfile(
  token: string
): Promise<TaxisProfile | null> {
  const userInfoUrl = `${baseURL}/userinfo?format=xml`;

  try {
    const response = await fetch(userInfoUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    // Get the raw XML response as a string
    const xmlString = await response.text();

    // Parse the XML string into a DOM Document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // Convert the XML userinfo element into a JSON-like object
    const userInfoElement = xmlDoc.querySelector("userinfo");

    if (!userInfoElement) {
      throw new Error("userinfo element not found in XML response");
    }

    // Create an object of type TaxisProfile
    const taxisProfile: TaxisProfile = {
      taxid: userInfoElement.getAttribute("taxid") || "",
      userid: userInfoElement.getAttribute("userid") || "",
      firstname: userInfoElement.getAttribute("firstname") || undefined,
      lastname: userInfoElement.getAttribute("lastname") || undefined,
      fathername: userInfoElement.getAttribute("fathername") || undefined,
      mothername: userInfoElement.getAttribute("mothername") || undefined,
      birthyear: userInfoElement.getAttribute("birthyear") || undefined,
    };

    // Add any additional attributes dynamically
    for (const attr of Array.from(userInfoElement.attributes)) {
      if (!(attr.name in taxisProfile)) {
        taxisProfile[attr.name] = attr.value;
      }
    }

    return taxisProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

/**
 * Programmatically log in the user
 */
function programmaticLogin(userProfile: TaxisProfile): void {
  // Example: Store user data in session storage or perform login action
}

/**
 * Example function to handle the TaxisNet OAuth process
 */
export async function taxisOAuth(): Promise<void> {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (!code) return;

  const accessToken = await handleTaxisCallback(code);

  if (accessToken) {
    const userProfile = await getUserProfile(accessToken);

    if (userProfile) {
      // Perform user login or other actions
      programmaticLogin(userProfile);
    } else {
      console.error("Failed to retrieve user profile");
    }
  } else {
    console.error("Failed to retrieve access token");
  }
}
