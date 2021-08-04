/**
 * 归并排序
 * @param arr
 * @param low
 * @param high
 */
function mergeSort(arr, low, high) {
  if (low === high) {
    return;
  }
  let mid = low + ((high - low) >> 1);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, mid + 1, high);
}

/**
 * 合并两个子数组
 * @param arr 原数组
 * @param startOfLeftArr 左侧子数组起点
 * @param endOfLeftArr  终点
 * @param startOfRightArr 右侧子数组起点
 * @param endOfRightArr 终点
 */
function merge(arr, startOfLeftArr, endOfLeftArr, startOfRightArr, endOfRightArr) {
  let num = startOfLeftArr;
  let mergedArr = [];
  while (startOfLeftArr <= endOfLeftArr && startOfRightArr <= endOfRightArr) {
    if (arr[startOfLeftArr] <= arr[startOfRightArr]) {
      mergedArr.push(arr[startOfLeftArr]);
      startOfLeftArr++;
    } else {
      mergedArr.push(arr[startOfRightArr]);
      startOfRightArr++;
    }
  }
  if (startOfRightArr > endOfRightArr) {
    startOfRightArr = startOfLeftArr;
    endOfRightArr = endOfLeftArr;
  }
  while (startOfRightArr <= endOfRightArr) {
    mergedArr.push(arr[startOfRightArr]);
    startOfRightArr++;
  }
  for (let e of mergedArr) {
    arr[num++] = e;
  }
}

const test = function () {
  const arr = [1, 0];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}
test();

