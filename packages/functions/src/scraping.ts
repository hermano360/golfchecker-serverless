import { setLatestUpdatedAt } from "../../utils/updatedAt";
import { ApiHandler } from "sst/node/api";
import { parse } from "node-html-parser";
import { fetchScraping, submitEntries } from "../../utils/scraping";
import { coursesWithId } from "./courses";
import { parseTime } from "../../utils/data/time";
import { setEntryItemUtil } from "../../utils/entities";

export const initializeScrape = ApiHandler(async (evt) => {
  try {
    const scrapingText = await fetchScraping("03/01/2024", 3);

    const root = parse(scrapingText);
    console.log("fetched root");
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

    const { updatedAt } = await setLatestUpdatedAt();
    console.log("generated updatedAt time");
    await setEntryItemUtil(updatedAt, entries);
    console.log("submitted entries");
    return {
      statusCode: 200,
      body: JSON.stringify({ entries, updatedAt }),
    };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
});
