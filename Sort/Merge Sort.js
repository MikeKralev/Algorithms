function merge(arr1, arr2) {
  const result = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
    result.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    result.push(arr2[index2]);
    index2++;
  }
  return result;
}
