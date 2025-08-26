import { DEPLOYMENT_URL } from "vercel-url";

const { ACCOUNT_ID } = process.env;

// Set the plugin url in order of BITTE_CONFIG, env, DEPLOYMENT_URL (used for Vercel deployments)
const PLUGIN_URL =
  DEPLOYMENT_URL ||
  `${process.env.NEXT_PUBLIC_HOST || "localhost"}:${process.env.PORT || 3000}`;

export { ACCOUNT_ID, PLUGIN_URL };
