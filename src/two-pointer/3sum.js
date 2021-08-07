/**
 * 求三数之和
 * @param nums
 */
const threeSum = function(nums) {
  let res = [];
  // 升序
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i <= nums.length - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        let val = nums[l++];
        while (l < r) {
          if (nums[l] === val) {
            l++;
          } else {
            break;
          }
        }
        val = nums[r--];
        while (l < r) {
          if (nums[r] === val) {
            r--;
          } else {
            break;
          }
        }
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};

function test() {
  let arr = [-1,0,1,2,-1,-4];
  let res = threeSum(arr);
  console.log(res);
}
test();