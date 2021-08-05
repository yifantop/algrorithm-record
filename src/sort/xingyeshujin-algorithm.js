/**
 * 求一个字符串中两个相同字符之间的最大距离-兴业数金前端编程题
 * @param s
 * @returns {number}
 */
function maxLengthBetweenEqualCharacters(s) {
  let map = new Map();
  let maxLength = -1;
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (!map.has(c)) {
      map.set(c, i);
    } else {
      maxLength = Math.max(maxLength, i - map.get(c) - 1);
    }
  }
  return maxLength;
}

console.log(maxLengthBetweenEqualCharacters("fwejfldskjf"));
