import axios from "axios";
import { Api } from "sst/node/api";
import { parse } from "node-html-parser";
import { coursesWithId } from "../functions/src/courses";
import { parseTime } from "./data/time";

export const fetchScraping = (date: string, players = 4): Promise<string> => {
  const instructions = [
    { wait_for: ".preSearch-calendar-input" },
    {
      evaluate: `document.querySelector('.preSearch-calendar-input').value = ''`,
    },
    {
      evaluate: `document.querySelector('.preSearch-select-player').value = 'string:${players}'`,
    },
    { fill: [".preSearch-calendar-input", date] },
    { wait: 1500 },
    { click: ".btn-default" },
    { wait_for: ".X2CourseName" },
    { wait: 5000 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 2000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 2000 },
    { wait: 500 },
    { scroll_y: 2000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 2000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
    { scroll_y: 8000 },
    { wait: 500 },
  ];

  return new Promise((resolve, reject) => {
    axios
      .get("https://app.scrapingbee.com/api/v1/", {
        params: {
          api_key:
            "GZHVA58CGR3EAMBP7VH8FPFA91YJZF1O1C710CNECR6T1PCM85CHU7955STYXYKXLXHP1JI7T4L270Q3",
          url: "https://cityofla.ezlinksgolf.com",
          wait: "5000",
          block_resources: "false",
          premium_proxy: "true",
          stealth_proxy: "true",
          js_scenario: JSON.stringify({ instructions }),
          country_code: "us",
        },
      })
      .then(function (response) {
        // handle success

        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const processScraping = (scrapingText: string) => {
  const root = parse(scrapingText);

  const [searchDate] =
    root
      .querySelector('[data-ng-bind="ec.dateAndPlayersReadout()"]')
      ?.rawText?.split(" / ") || [];
  console.log("extracted search data", searchDate);
  const teeTimeItems = root.querySelectorAll(
    'li[ng-repeat="t in ec.teetimes"]'
  );

  const entries = teeTimeItems.map((teeTimeItem) => {
    const courseName = teeTimeItem.querySelector(
      '[data-ng-bind="ec.teetimeCourseName(t)"]'
    )?.rawText;

    const course = coursesWithId.find((course) => course.name === courseName);
    const courseId = course?.id;

    const teeClockTime = teeTimeItem.querySelector(
      '[data-ng-bind="ec.teetimeTimeDisplay(t)"]'
    )?.rawText;
    const price = teeTimeItem.querySelector(
      '[data-ng-bind="ec.teetimePriceDisplay(t)"]'
    )?.rawText;

    const numPlayers = teeTimeItem.querySelector(
      '[data-ng-bind="ec.teetimePlayerDisplayText(t)"]'
    )?.rawText;
    const is18Holes =
      teeTimeItem.querySelector(
        '[data-ng-src="assets/images/icons/icon_18.png"]'
      )?.rawText !== undefined;
    const is9Holes =
      teeTimeItem.querySelector(
        '[data-ng-src="assets/images/icons/icon_9.png"]'
      )?.rawText !== undefined;

    return {
      courseId,
      teeTime: parseTime(searchDate, teeClockTime),
      price,
      numPlayers,
      is18Holes,
      is9Holes,
    };
  });

  return { entries };
};

export const submitEntries = (updatedAt, entries) => {
  return new Promise((resolve, reject) => {
    console.log(`${Api.api.url}/entities/set`);
    axios
      .post(`${Api.api.url}/entities/set`, {
        updatedAt,
        entries,
      })
      .then(function (response) {
        // handle success

        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
