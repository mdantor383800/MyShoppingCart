export function sortItem(items, sortType) {
  let sorted = [...items];

  switch (sortType) {
    case "A_TO_Z":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z_TO_A":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "LOW_TO_HIGH":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "HIGH_TO_LOW":
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return sorted;
}
