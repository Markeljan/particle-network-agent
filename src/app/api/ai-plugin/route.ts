import { NextResponse } from "next/server";
import { ACCOUNT_ID, PLUGIN_URL } from "@/lib/config";

export async function GET() {
  const pluginData = {
    openapi: "3.0.0",
    info: {
      title: "Particle Network Agent",
      description:
        "Particle Network Agent helps with documentation and support for Particle.Network",
      version: "1.0.0",
    },
    servers: [
      {
        // Enter the base and open url of your agent here, make sure it is reachable
        url: PLUGIN_URL,
      },
    ],
    "x-mb": {
      // The account id of the user who created the agent found in .env file
      "account-id": ACCOUNT_ID,
      // The email of the user who created the agent
      email: "mark@bitte.ai",
      assistant: {
        name: "Particle Network Agent",
        description:
          "An assistant specialized in Particle.Network operations including documentation and support.",
        instructions:
          "You are a helpful assistant that can help with documentation and support for Particle.Network. Use the data-retrieval tool with source 'particle-docs' to answer questions about Particle Network (Particle.network) and to access query the documentation.  When using the data-retrieval tool, you should always use the source 'particle-docs' and not any other sources.",
        tools: [{ type: "data-retrieval" }],
        // Thumbnail image for your agent
        image: `${PLUGIN_URL}/favicon.ico`,
        // The repo url for your agent https://github.com/your-username/your-agent-repo
        // repo: "https://github.com/BitteProtocol/base-agent",
        // The categories your agent supports ["DeFi", "DAO", "NFT", "Social"]
        categories: ["DeFi"],
        // The chains your agent supports 8453 = base
        chainIds: [1, 8453],
      },
    },
    paths: {
      "/not-implemented": {
        get: {
          operationId: "not-implemented",
          summary: "Dummy route, implement additional tools here",
          description: "Not implemented, implement additional tools here",
          responses: {
            200: {
              description: "Success",
            },
          },
        },
      },
    },
  };

  return NextResponse.json(pluginData);
}
