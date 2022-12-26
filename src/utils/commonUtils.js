export const filterArray = (arrayToFilter, filterValue) => {
  const filteredArray = arrayToFilter.filter((item) => {
    return item?.keywords.includes(filterValue);
  })
  return filteredArray;
}