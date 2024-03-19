import axios from "axios";
import { DateSlash, IsoTimeStamp } from "../time/types";
import { generateEntriesFromHtml, saveEntries } from "../entries/utils";
import { SQSRecord } from "../sqs/types";
import { deleteSQSMessage } from "../sqs/utils";
import { CourseName } from "../courses/types";
import { completeCourseList } from "../courses/utils";

export const fetchScraping = (
  date: DateSlash,
  players = 4,
  courses: CourseName[] = []
): Promise<string> => {
  const checkboxInputs = courses.map((course) =>
    completeCourseList.indexOf(course)
  );
  console.log({ checkboxInputs, courses });

  const inputClicks = `const values=document.querySelectorAll('input[title="Select a course"]');${[
    checkboxInputs,
  ]
    .map((i) => `values[${i}].click()`)
    .join(";")}`;

  const instructions = [
    { wait_for: ".preSearch-calendar-input" },
    {
      evaluate: `document.querySelector('.preSearch-calendar-input').value = ''`,
    },
    {
      evaluate: `document.querySelector('.preSearch-select-player').value = 'string:${players}'`,
    },
    { fill: [".preSearch-calendar-input", date] },
    {
      evaluate: inputClicks,
    },
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
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
    {
      evaluate: "window.scrollBy(0,400)",
    },
    { wait: 1500 },
  ];

  return new Promise((resolve, reject) => {
    axios
      .get("https://app.scrapingbee.com/api/v1/", {
        params: {
          api_key:
            "TV3FVBYHGSKOTC3YFJTG13WS3QSTUOQGL1LY7SGDNCK8IVBV8JU5TTUWC24VUBY4018QLWLOUCWDAJM1",
          url: "https://cityoflapcp.ezlinksgolf.com",
          wait: "5000",
          block_resources: "false",
          premium_proxy: "true",
          stealth_proxy: "true",
          js_scenario: JSON.stringify({ instructions }),
          country_code: "us",
        },
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch((err) => {
        console.log(
          `There was an error with the request for ${JSON.stringify({
            date,
            players,
            courses,
          })}`
        );
        reject(err);
      });
  });
};

export const scrapingUtility = async (
  date: DateSlash,
  updatedAt: IsoTimeStamp,
  courses: CourseName[]
) => {
  const result = await fetchScraping(date, 4, courses);

  const entries = await generateEntriesFromHtml(result, { date, courses });

  await saveEntries(entries, updatedAt);
  return { success: true };
};

export const extractFirstValidRecord = async (
  queueName: string,
  records: SQSRecord[] | undefined
): Promise<SQSRecord | undefined> => {
  if (!records) {
    return;
  }
  const validRecord: SQSRecord[] = [];

  for (let record of records) {
    if (validRecord.length) {
      await deleteSQSMessage(queueName, record.receiptHandle);
    }
    const body = JSON.parse(record.body);
    if (!body) {
      await deleteSQSMessage(queueName, record.receiptHandle);
    }

    validRecord.push(record);
  }

  return validRecord[0];
};
