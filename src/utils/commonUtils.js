export const filterArray = (arrayToFilter, filterValue) => {
  const filteredArray = arrayToFilter.filter((item) => {
    return item?.alt.toLowerCase().includes(filterValue);
  })
  return filteredArray;
}