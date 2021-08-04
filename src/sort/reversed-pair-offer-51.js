/**
 * 求出数组中的所有逆序对的总数，(7, 5)、(5, 1)是逆序对
 * 思路：采用归并排序(逆序)，当两个子数组合并时，只需要左边子数组指针处的数>右边子数组指针处的数，那么此时右边子数组指针处及之后所有的
 * 数都小于左边子数组的指针处的值，显然，就可以知道：以左子数组指针处的值为逆序对的第一个数，可以有多少个逆序对，不会重复也不会漏掉
 */
function reversedPair(nums) {
  let count = 0;
  let low = 0;
  let high = nums.length - 1;
  function mergeSort(nums, low, high) {
    if (low >= high) {
      return;
    }
    let mid = low + ((high - low) >> 1);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);
    merge(nums, low, mid, mid + 1, high);
  }
  function merge(nums, l1, r1, l2, r2) {
    let mergedArr = [];
    let pos = l1;
    while (l1 <= r1 && l2 <= r2) {
      // 相等时，先走后面
      if (nums[l1] > nums[l2]) {
        count += r2 - l2 + 1;
        mergedArr.push(nums[l1]);
        l1++;
      } else {
        mergedArr.push(nums[l2]);
        l2++;
      }
    }
    while (l1 <= r1) {
      mergedArr.push(nums[l1]);
      l1++;
    }
    while (l2 <= r2) {
      mergedArr.push(nums[l2]);
      l2++;
    }
    for (let e of mergedArr) {
      nums[pos++] = e;
    }
  }
  mergeSort(nums, low, high);
  return count;
}

const test = function () {
  let nums = [3, 2, 4, 5, 0];
  let res = reversedPair(nums);
  console.log(res);
}
test();