// Quicksort searching algorithm for sort hotel list based on price
function sortHotelWithPrice(originalList, order = "ascending") {
  const list = [...originalList];

  if (list.length === 0) {
    return [];
  }

  const pivot = list[Math.floor(list.length / 2)];

  const smaller = list.filter((item) => {
    // eslint-disable-next-line array-callback-return
    if (!item.offers[0]) return;
    return +item.offers[0].price.total < +pivot.offers[0].price.total;
  });
  const bigger = list.filter((item) => {
    // eslint-disable-next-line array-callback-return
    if (!item.offers[0]) return;
    return +item.offers[0].price.total > +pivot.offers[0].price.total;
  });
  // used for select ascending or descending order
  switch (order) {
    case "ascending":
      return [...sortHotelWithPrice(smaller), pivot, ...sortHotelWithPrice(bigger)];
    default:
      return [...sortHotelWithPrice(bigger), pivot, ...sortHotelWithPrice(smaller)];
  }
}

export { sortHotelWithPrice };
