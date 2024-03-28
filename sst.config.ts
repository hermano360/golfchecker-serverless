import { Duration } from "aws-cdk-lib/core";
import { SSTConfig } from "sst";
import { Api, NextjsSite, Table, Queue, Cron } from "sst/constructs";
import { acceptQueue } from "./sst/testing/queue";

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

      const queue = new Queue(stack, "ScrapeRequestQueue", {
        consumer: {
          function: "sst/scraping/queue.scrapeRequest",
          cdk: {
            eventSource: {
              batchSize: 50,
              maxBatchingWindow: Duration.seconds(60),
            },
          },
        },
      });

      // const cron = new Cron(stack, "ScrapingCron", {
      //   job: "sst/scraping/cron.scheduleFetching",
      //   schedule: "cron(0/60 * * * ? *)",
      // });

      const fetchingQueue = new Queue(stack, "FetchingQueue", {
        consumer: {
          function: "sst/scraping/queue.scrapeFetch",
          cdk: {
            eventSource: {
              maxConcurrency: 3,
            },
          },
        },
      });

      // cron.bind([queue]);

      const matchingQueue = new Queue(stack, "MatchingQueue", {
        consumer: {
          function: "sst/matches/queue.match",
          cdk: {
            eventSource: {
              batchSize: 50,
              maxBatchingWindow: Duration.seconds(60),
            },
          },
        },
      });
      const testReceivingQueue = new Queue(stack, "TestReceiveQueue", {
        consumer: {
          function: "sst/testing/queue.testReceives",
        },
      });
      const testWorkQueue = new Queue(stack, "TestAcceptQueue", {
        consumer: {
          function: "sst/testing/queue.acceptQueue",
        },
      });

      testReceivingQueue.bind([table, testWorkQueue, testReceivingQueue]);

      fetchingQueue.bind([table, fetchingQueue, matchingQueue]);
      matchingQueue.bind([table, matchingQueue]);
      testWorkQueue.bind([table, testWorkQueue]);

      queue.bind([table, fetchingQueue, queue, matchingQueue]);

      const api = new Api(stack, "api", {
        defaults: {
          function: {
            bind: [
              table,
              queue,
              matchingQueue,
              fetchingQueue,
              testReceivingQueue,
            ],
          },
        },
        routes: {
          "GET /updatedAt": "sst/updatedAt/api.getLatestUpdatedAtHandler",
          "POST /updatedAt": "sst/updatedAt/api.setLatestUpdatedAtHandler",
          "GET /matchedAt/{userId}":
            "sst/matchedAt/api.getLatestMatchedAtHandler",
          "POST /matchedAt/{userId}":
            "sst/matchedAt/api.setLatestMatchedAtHandler",
          "GET /courses": "sst/courses/api.fetchCourses",
          "POST /entries": "sst/entries/api.fetchEntriesHandler",
          "POST /entries/save": "sst/entries/api.saveEntriesHandler",
          "POST /scrape": "sst/scraping/api.initiateEntryFetching",
          "GET /matches": "sst/matches/api.initiateMatchesFetching",
          "GET /matches/{userId}": "sst/matches/api.fetchMatchesByUserHandler",
          "GET /alerts/{userId}": "sst/alerts/api.fetchAlerts",
          "GET /alerts/{userId}/{alertId}": "sst/alerts/api.fetchAlertById",
          "PUT /alerts/{userId}/{alertId}": "sst/alerts/api.editAlert",
          "DELETE /alerts/{userId}/{alertId}": "sst/alerts/api.deleteAlertById",
          "POST /alerts": "sst/alerts/api.saveAlert",
          "GET /users": "sst/users/api.fetchAllUsersHandler",
          "GET /users/{userId}/register": "sst/users/api.saveUser",
          "GET /test/queue": "sst/testing/api.initiateTestQueue",
          "GET /profile/{userId}": "sst/profile/api.fetchProfileHandler",
          "POST /profile": "sst/profile/api.setProfileHandler",
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
