// app/reference/route.ts
import { ApiReference } from "@scalar/nextjs-api-reference";

const config = {
  url: "/.well-known/ai-plugin.json",
};

export const GET = ApiReference(config);
