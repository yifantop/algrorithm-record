/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * @param nums
 * @param target
 * @returns {[number, number]|[undefined, number]}
 */
const searchRange = function(nums, target) {
  function binarySearch(nums, target, flag) {
    let low = 0;
    let high = nums.length - 1;
    let ans = nums.length;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] > target || (flag && nums[mid] === target)) {
        high = mid - 1;
        ans = mid;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
  let start = binarySearch(nums, target, true);
  let end = binarySearch(nums, target, false) - 1;
  if (nums[start] === target && nums[end] === target) {
    return [start, end];
  }
  return [-1, -1];
};