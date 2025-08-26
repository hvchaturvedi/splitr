import { authConfig } from "convex/server";

export default authConfig({
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex", // just an identifier
    },
  ],
});
