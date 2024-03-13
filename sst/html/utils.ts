import { HTMLElement } from "node-html-parser";
import { ClockTime, DateSlash, IsoTimeStamp } from "../time/types";
import { CourseId, CourseName } from "../courses/types";
import { convertCourseToId } from "../courses/utils";
import { parseTime } from "../time/utils";
import { TeeTimeEntry } from "../entries/types";

export const extractSearchDate = (
  parsedHtml: HTMLElement
): DateSlash | undefined => {
  const [searchDate] =
    parsedHtml
      .querySelector('[data-ng-bind="ec.dateAndPlayersReadout()"]')
      ?.rawText?.split(" / ") || [];

  return searchDate as DateSlash;
};

export const extractCourseId = (
  parsedTeeTimeItem: HTMLElement
): CourseId | undefined => {
  const courseName = parsedTeeTimeItem.querySelector(
    '[data-ng-bind="ec.teetimeCourseName(t)"]'
  )?.rawText as CourseName | undefined;

  return convertCourseToId(courseName);
};

export const extractTeeTime = (
  searchDate: DateSlash | undefined,
  parsedTeeTimeItem: HTMLElement
): IsoTimeStamp | undefined => {
  if (!searchDate) {
    return;
  }
  const teeClockTime = parsedTeeTimeItem.querySelector(
    '[data-ng-bind="ec.teetimeTimeDisplay(t)"]'
  )?.rawText as ClockTime | undefined;

  return parseTime(searchDate, teeClockTime);
};

export const extractPrice = (
  parsedTeeTimeItem: HTMLElement
): number | undefined => {
  const priceText = parsedTeeTimeItem.querySelector(
    '[data-ng-bind="ec.teetimePriceDisplay(t)"]'
  )?.rawText;

  if (!priceText) {
    return;
  }

  const parsedPrice = parseFloat(priceText.replace("$", ""));

  if (isNaN(parsedPrice)) {
    return;
  }

  return parsedPrice;
};

export const extractNumPlayers = (
  parsedTeeTimeItem: HTMLElement
): number | undefined => {
  const numPlayersText = parsedTeeTimeItem.querySelector(
    '[data-ng-bind="ec.teetimePlayerDisplayText(t)"]'
  )?.rawText;

  if (!numPlayersText) {
    return;
  }

  const numPlayersRegex = /(?:\d\–)?(\d)\sPlayer[s]?/gi;

  const maxNumberOfPlayers = parseInt(
    numPlayersText.replace(numPlayersRegex, "$1")
  );

  if (isNaN(maxNumberOfPlayers)) {
    return;
  }

  return maxNumberOfPlayers;
};

export const extractNumberOfHoles = (
  parsedTeeTimeItem: HTMLElement
): number | undefined => {
  const is18Holes =
    parsedTeeTimeItem.querySelector(
      '[data-ng-src="assets/images/icons/icon_18.png"]'
    )?.rawText !== undefined;
  const is9Holes =
    parsedTeeTimeItem.querySelector(
      '[data-ng-src="assets/images/icons/icon_9.png"]'
    )?.rawText !== undefined;

  if (is18Holes) {
    return 18;
  } else if (is9Holes) {
    return 9;
  }

  return;
};

export const extractTeeTimeEntries = (
  parsedHtml: HTMLElement
): TeeTimeEntry[] => {
  const searchDate = extractSearchDate(parsedHtml);

  const teeTimeItems = parsedHtml.querySelectorAll(
    'li[ng-repeat="t in ec.teetimes"]'
  );

  const entries = teeTimeItems
    .map((teeTimeItem) => {
      const courseId = extractCourseId(teeTimeItem);

      const teeTime = extractTeeTime(searchDate, teeTimeItem);

      const price = extractPrice(teeTimeItem);

      const numPlayers = extractNumPlayers(teeTimeItem);

      const numHoles = extractNumberOfHoles(teeTimeItem);

      return {
        courseId,
        teeTime,
        price,
        numPlayers,
        numHoles,
      };
    })
    .filter(
      ({ courseId, teeTime, price, numPlayers, numHoles }) =>
        courseId && teeTime && numPlayers && price && numHoles
    ) as TeeTimeEntry[];

  console.log(`${entries.length} entries fetched for ${searchDate}`);

  return entries;
};
