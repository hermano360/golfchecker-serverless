import axios from "axios";
import { DateSlash, IsoTimeStamp } from "../time/types";
import { generateEntriesFromHtml, saveEntries } from "../entries/utils";
import { SQSRecord } from "../sqs/types";
import { deleteSQSMessage } from "../sqs/utils";

export const fetchScraping = (
  date: DateSlash,
  players = 4
): Promise<string> => {
  const inputClicks = `const values=document.querySelectorAll('input[title="Select a course"]');${[
    0, 1, 2, 4, 6, 7, 10, 11, 13, 15,
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
        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const scrapingUtility = async (
  date: DateSlash,
  updatedAt: IsoTimeStamp
) => {
  const result = await fetchScraping(date);

  const entries = await generateEntriesFromHtml(result);

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
