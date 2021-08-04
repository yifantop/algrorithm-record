/**
 * 求一个数组中每个数的左侧小于该数的元素之和——用归并排序解决
 * @param arr
 * @param low
 * @param high
 */
function sumOfLowerNumber(arr, low, high) {
  let sum = 0;
  /**
   * 归并排序
   * @param arr
   * @param low
   * @param high
   */
  const mergeSort = function (arr, low, high) {
    if (low === high) {
      return;
    }
    let mid = low + ((high - low) >> 1);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, mid + 1, high);
  }
  /**
   * 合并的时候，要算小和
   * @param arr
   * @param startOfLeftArr
   * @param endOfLeftArr
   * @param startOfRightArr
   * @param endOfRightArr
   */
  const merge = function (arr, startOfLeftArr, endOfLeftArr, startOfRightArr, endOfRightArr) {
    let num = startOfLeftArr;
    let mergedArr = [];
    while (startOfLeftArr <= endOfLeftArr && startOfRightArr <= endOfRightArr) {
      // 此处是<，保证在相等的时候，先拿走右边的数
      if (arr[startOfLeftArr] < startOfRightArr) {
        sum += arr[startOfLeftArr] * (endOfRightArr - startOfRightArr + 1);
        mergedArr.push(arr[startOfLeftArr]);
        startOfLeftArr++;
      } else {
        mergedArr.push(startOfRightArr);
        startOfRightArr++;
      }
    }
    while (startOfLeftArr <= endOfLeftArr) {
      mergedArr.push(arr[startOfLeftArr]);
      startOfLeftArr++;
    }
    while (startOfRightArr <= endOfRightArr) {
      mergedArr.push(arr[startOfRightArr]);
      startOfRightArr++;
    }
    for (let e of mergedArr) {
      arr[num++] = e;
    }
  }
  mergeSort(arr, low, high);
  return sum;
}

const test = function () {
  let arr = [1, 3, 4, 2, 5];
  let sum = sumOfLowerNumber(arr, 0, arr.length - 1);
  console.log(sum);
}
test();