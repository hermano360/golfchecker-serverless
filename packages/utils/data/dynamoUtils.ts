export const splitWriteItems = (items: any[]) => {
  const sectionedItems = [[]];

  items.forEach((item: any) => {
    if (sectionedItems[sectionedItems.length - 1].length >= 25) {
      sectionedItems.push([]);
    }

    sectionedItems[sectionedItems.length - 1].push(item);
  });

  return sectionedItems;
};
