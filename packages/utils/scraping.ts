import axios from "axios";
import { Api } from "sst/node/api";

export const fetchScraping = (
  date: string,
  players: number
): Promise<string> => {
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
            "RGF7SW8WTWMVP7QGXTD24SXYMMNDQA52N2NL66UTQDYISMLW6W8PWEFPZAE0I4XAJU9JWBYZ0C2JVG2Z",
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
