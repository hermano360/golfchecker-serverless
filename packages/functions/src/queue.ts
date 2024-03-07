import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import { fetchAlertsByUser } from "../../utils/alerts";
import { fetchEntitiesUtil } from "../../utils/entities";
import { getRangeListOfDates, parseTimeDashes } from "../../utils/data/time";

import { setMatchItemUtil } from "../../utils/matches";
import { setLatestMatchedAtUtil } from "../../utils/matchedAt";
import { getLatestUpdatedAt } from "../../../sst/updatedAt/utils";

dayjs.extend(duration);
dayjs.extend(utc);

const sqs = new AWS.SQS();

export async function match(event) {
  const userId = JSON.parse(event.Records[0].body).userId;

  const alerts = await fetchAlertsByUser(userId);
  const updatedAt = await getLatestUpdatedAt();

  const alertQueries = alerts.reduce((acc, alert) => {
    const dateList = getRangeListOfDates(alert.startDate, alert.endDate);
    const { courseId, startTime, endTime } = alert;

    const values = dateList.map((date) => ({
      updatedAt,
      courseId,
      startsAt: parseTimeDashes(date, startTime),
      endsAt: parseTimeDashes(date, endTime),
    }));

    return [...acc, ...values];
  }, []);

  const matchQueries = await Promise.all(alertQueries.map(fetchEntitiesUtil));

  const matches = matchQueries.reduce((finalMatches, query) => {
    return [...finalMatches, ...query];
  }, []);

  const { matchedAt } = await setLatestMatchedAtUtil(userId);

  if (matches.length === 0) {
    return {};
  }

  await setMatchItemUtil({ matchedAt, userId, matches });

  return {};
}
