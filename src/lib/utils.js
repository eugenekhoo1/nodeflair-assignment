import { formatDistanceStrict, subDays } from "date-fns";

export function formatDate(date) {
  return formatDistanceStrict(subDays(new Date(date), 0), new Date());
}

export function getPageNumbers(page, maxPage) {
  const pageNumbers = [];

  // less than or equal 5 pages
  if (maxPage <= 5) {
    for (let i = 1; i <= maxPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  // more than 5 pages
  let start = page - 2;

  // if page in [1, 2]
  if (start < 1) {
    start = 1;
  }
  // if page in [maxPage - 1, maxPage - 2]
  else if (start + 4 > maxPage) {
    start = maxPage - 4;
  }

  for (let i = 0; i < 5; i++) {
    pageNumbers.push(start);
    start++;
  }

  return pageNumbers;
}
