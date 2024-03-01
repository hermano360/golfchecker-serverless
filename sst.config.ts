import { Duration } from "aws-cdk-lib/core";
import { SSTConfig } from "sst";
import { Api, NextjsSite, Table, Queue } from "sst/constructs";

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

      const queue = new Queue(stack, "Queue", {
        consumer: {
          function: "packages/functions/src/queue.consumer",
          cdk: {
            eventSource: {
              batchSize: 50,
              maxBatchingWindow: Duration.seconds(60),
            },
          },
        },
      });

      const fetchingQueue = new Queue(stack, "FetchingQueue", {
        consumer: {
          function: "packages/functions/src/queue.scrape",
        },
      });

      fetchingQueue.bind([table]);

      queue.bind([table, fetchingQueue]);

      const api = new Api(stack, "api", {
        defaults: {
          function: {
            bind: [table, queue],
          },
        },
        routes: {
          "GET /": "packages/functions/src/time.handler",
          "GET /updatedAt": "packages/functions/src/updatedAt.getLatest",
          "POST /updatedAt": "packages/functions/src/updatedAt.setLatest",
          "GET /courses": "packages/functions/src/courses.fetchCourses",
          "POST /entities": "packages/functions/src/entities.fetchEntities",
          "POST /entities/set": "packages/functions/src/entities.setEntities",
          "POST /scraping": "packages/functions/src/scraping.initializeScrape",
          "POST /scrape": "packages/functions/src/queue.requester",
          "POST /match": "packages/functions/src/matches.main",
          "GET /alerts/{userId}": "packages/functions/src/alerts.fetchAlerts",
          "POST /alerts": "packages/functions/src/alerts.setAlerts",
        },
      });

      const site = new NextjsSite(stack, "site", { bind: [api] });

      api.bind([site]);

      stack.addOutputs({
        ApiUrl: api.url,
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
