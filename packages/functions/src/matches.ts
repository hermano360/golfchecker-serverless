import { NextjsSite } from "sst/node/site";
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import duration from "dayjs/plugin/duration";

// dayjs.extend(duration);
// dayjs.extend(utc);

export async function main() {
  const site = NextjsSite.site.url;

  console.log(site);
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "Checking out user info", site }),
  };
}
