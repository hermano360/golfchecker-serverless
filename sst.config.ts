import { SSTConfig } from "sst";
import { Api, NextjsSite, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "golfchecker",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const table = new Table(stack, "GolfChecker", {
        primaryIndex: { partitionKey: "PK", sortKey: "SK" },
        fields: {
          PK: "string",
          SK: "string",
        },
      });

      const api = new Api(stack, "api", {
        defaults: {
          function: {
            bind: [table],
          },
        },
        routes: {
          "GET /": "packages/functions/src/time.handler",
          "GET /updatedAt": "packages/functions/src/updatedAt.getLatest",
          "POST /updatedAt": "packages/functions/src/updatedAt.setLatest",
        },
      });
      const site = new NextjsSite(stack, "site", { bind: [api] });

      stack.addOutputs({
        ApiUrl: api.url,
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
