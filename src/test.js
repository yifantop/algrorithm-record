/**
 * 在无序数组中找最大值
 */
const searchMaxValue = function (arr, low, high) {
  if (low === high) {
    return arr[low];
  }
  let mid = low + ((high - low) >> 1);
  let leftMax = searchMaxValue(arr, low, mid);
  let rightMax = searchMaxValue(arr, mid + 1, high);
  return Math.max(leftMax, rightMax);
}
let arr = [2,6,9,6,3,5,7,4,8,2,12,12,5,9,6];
console.log(searchMaxValue(arr, 0, arr.length - 1));