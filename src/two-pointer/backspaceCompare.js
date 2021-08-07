/**
 * 比较含退格的两个字符串是否相等-栈的解法
 * @param s 字符串s
 * @param t 字符串t
 */
function backspaceCompare(s, t) {
  let stack = [];
  let lastS = '';
  let lastT = '';
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '#') {
      if (stack.length !== 0) {
        stack.pop();
      }
    } else {
      stack.push(s.charAt(i));
    }
  }
  lastS = stack.join('');
  stack = [];
  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) === '#') {
      if (stack.length !== 0) {
        stack.pop();
      }
    } else {
      stack.push(t.charAt(i));
    }
  }
  lastT = stack.join('');
  return lastS === lastT;
}

function backspaceCompare2(s, t) {
  let sp = s.length - 1;
  let tp = t.length - 1;
  let backspaceCountOfS = 0;
  let backspaceCountOfT = 0;
  while (sp >= 0 || tp >= 0) {
    while (sp >= 0) {
      if (s.charAt(sp) === '#') {
        backspaceCountOfS++;
      } else if (backspaceCountOfS > 0) {
        backspaceCountOfS--;
      } else {
        break;
      }
      sp--;
    }
    while (tp >= 0) {
      if (t.charAt(tp) === '#') {
        backspaceCountOfT++;
      } else if (backspaceCountOfT > 0) {
        backspaceCountOfT--;
      } else {
        break;
      }
      tp--;
    }
    if (sp < 0 && tp < 0) {
      break;
    }
    if ((sp < 0 && tp >= 0) || (sp >= 0 && tp < 0)) {
      return false;
    }
    if (sp >= 0 && tp >= 0) { 
      if (s.charAt(sp) === t.charAt(tp)) {
        sp--;
        tp--;
      } else {
        return false;
      }
    }
  }
  return true;
}

function test() {
  let s = "xywrrmp";
  let t = "xywrrmu#p";
  let res = backspaceCompare2(s, t);
  console.log(res);
}

test();