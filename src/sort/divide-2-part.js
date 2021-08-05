/**
 * 给一个数组arr和一个数num，使该数组<=num的数放左边，大于num的放右边
 */
function dividePart(arr, num) {
  let minArea = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      let temp = arr[minArea];
      arr[minArea] = arr[i];
      arr[i] = temp;
      minArea++;
    }
  }
}
function test() {
  let arr = [3, 4, 5, 2, 1, 6];
  dividePart(arr, 3);
  console.log(arr);
}
test();