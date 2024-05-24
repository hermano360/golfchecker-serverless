import axios from "axios";
import parse from "node-html-parser";

export const fetchDiaryScraping = (userHandle: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.crawlbase.com/?token=fTYLrtvYWa78HaHg9vCCpQ&url=https%3A%2F%2Fwww.myfitnesspal.com%2Ffood%2Fdiary%2F${userHandle}`
      )
      .then(function (response) {
        resolve(response.data);
      })
      .catch((err) => {
        console.log(`There was an error with the request for ${userHandle}`);
        reject(err);
      });
  });
};

export const extractDailyMacros = (rawHtml: string): MacroMap => {
  const result = parse(rawHtml);
  const totalsRow = result.querySelectorAll("tr.total td");

  const macros: MacroMap = { calories: 0, carbs: 0, fat: 0, protein: 0 };

  if (!totalsRow) {
    return macros;
  }

  const categories: MacroType[] = ["calories", "carbs", "fat", "protein"];

  categories.forEach((category, i) => {
    if (category) {
      const value = totalsRow[i + 1].innerText.trim() || "";
      const macro = value.replace(/([\d]+)[\w\W]*/gm, "$1");

      if (macro) {
        macros[category] = parseInt(macro);
      }
    }
  });

  return macros;
};
