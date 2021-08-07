function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * 删除排序数组中的有重复的元素，只保留没重复过的
 * @param head 头结点指针
 */
const deleteDuplicateInSortArr = function (head) {
  if (!head) {
    return head;
  }
  let pre = null;
  let p = head;
  let isDuplicate = false;
  while (p.next !== null) {
    if (p.val === p.next.val) {
      isDuplicate = true;
      p = p.next;
    } else if (isDuplicate) {
      if (pre === null) {
        p = p.next;
        head = p;
        isDuplicate = false;
      } else {
        pre.next = p.next;
        p = p.next;
        isDuplicate = false;
      }
    } else {
      pre = p;
      p = p.next;
    }
  }
  if (isDuplicate) {
    if (pre === null) {
      return null;
    } else {
      pre.next = null;
      return head;
    }
  }
  return head;
}

function test() {
  let arr = [1, 1];
  // 基于arr构建单链表
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  head = deleteDuplicateInSortArr(head);
  // 打印删掉重复元素后的链表
  while (head != null) {
    console.log(head.value);
    head = head.next;
  }
}
test();