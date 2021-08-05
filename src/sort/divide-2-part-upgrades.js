/**
 * 划分数组成三个部分，左边严格小于num，中间严格等于num，右侧严格大于num
 * @param arr
 * @param num
 */
function divide2PartUpgrades(arr, num) {
  let lesserPointer = 0;
  let largerPointer = arr.length - 1;
  let i = 0;
  while (i <= largerPointer) {
    if (arr[i] < num) {
      let temp = arr[lesserPointer];
      arr[lesserPointer++] = arr[i];
      arr[i] = temp;
      i++;
    } else if (arr[i] === num) {
      i++;
    } else {
      let temp = arr[i];
      arr[i] = arr[largerPointer];
      arr[largerPointer--] = temp;
    }
  }
}
function test() {
  let arr = [3, 2, 5, 5, 6, 2, 8, 9, 1, 4, 6];
  divide2PartUpgrades(arr, 5);
  console.log(arr);
}
test();