export const filterArray = (arrayToFilter, filterValue) => {
  const filteredArray = arrayToFilter.filter((item) => {
    return item?.alt.toLowerCase().includes(filterValue);
  })
  return filteredArray;
}

export const findValueInArrayById = (valuesArray, value) => {
  const aux = valuesArray.find(img => img.id === value.id);
  return typeof aux?.id !== 'undefined';
}