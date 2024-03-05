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
          cdk: {
            eventSource: {
              maxConcurrency: 3,
            },
          },
        },
      });

      const matchingQueue = new Queue(stack, "MatchingQueue", {
        consumer: {
          function: "packages/functions/src/queue.match",
        },
      });

      fetchingQueue.bind([table, fetchingQueue]);
      matchingQueue.bind([table]);

      queue.bind([table, fetchingQueue, queue]);

      const api = new Api(stack, "api", {
        defaults: {
          function: {
            bind: [table, queue, matchingQueue, fetchingQueue],
          },
        },
        routes: {
          "GET /": "packages/functions/src/time.handler",
          "GET /updatedAt": "packages/functions/src/updatedAt.getLatest",
          "POST /updatedAt": "packages/functions/src/updatedAt.setLatest",
          "GET /matchedAt/{userId}":
            "packages/functions/src/matchedAt.getLatestMatchedAt",
          "POST /matchedAt/{userId}":
            "packages/functions/src/matchedAt.setLatestMatchedAt",
          "GET /courses": "packages/functions/src/courses.fetchCourses",
          "POST /entities": "packages/functions/src/entities.fetchEntities",
          "POST /entities/set": "packages/functions/src/entities.setEntities",
          "POST /scrape": "packages/functions/src/scraping.startScrape",
          "GET /matches": "packages/functions/src/matches.main",
          "GET /matches/{userId}":
            "packages/functions/src/matches.fetchMatchesByUser",
          "GET /alerts/{userId}": "packages/functions/src/alerts.fetchAlerts",
          "GET /alerts/{userId}/{alertId}":
            "packages/functions/src/alerts.fetchAlertById",
          "DELETE /alerts/{userId}/{alertId}":
            "packages/functions/src/alerts.deleteAlertById",
          "POST /alerts": "packages/functions/src/alerts.setAlerts",
          "GET /users": "packages/functions/src/users.fetchUsers",
          "GET /users/{userId}/register":
            "packages/functions/src/users.registerUser",
        },
      });

      const site = new NextjsSite(stack, "site", {
        bind: [api],
        environment: {
          NEXT_PUBLIC_API_URL: api.url,
        },
      });

      stack.addOutputs({
        ApiUrl: api.url,
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
