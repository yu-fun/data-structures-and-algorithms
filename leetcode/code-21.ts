// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例 1：
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
// 示例 2：

// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：

// 输入：l1 = [], l2 = [0]
// 输出：[0]

// 提示：

// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列

/**
 * Definition for singly-linked list.
 */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

type T = ListNode | null;

function mergeTwoLists(list1: T, list2: T): T {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list2, list1.next);
    return list1;
  }
}

function mergeTwoLists2(list1: T, list2: T): T {
  let newList: T = new ListNode(-1);
  let curNode: T = newList;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      curNode.next = l2;
      l2 = l2.next;
    } else {
      curNode.next = l1;
      l1 = l1.next;
    }
    curNode = curNode.next;
  }

  curNode.next = l1 ? l1 : l2;

  return newList;
}

function mergeTwoLists3(list1: T, list2: T): T {
  let newList: T = null;
  let curNode: T = null;

  let l1 = list1;
  let l2 = list2;

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        if (curNode) {
          curNode.next = l2;
        }
        curNode = l2;
        l2 = l2.next || null;
      } else {
        if (curNode) {
          curNode.next = l1;
        }
        curNode = l1;
        l1 = l1.next || null;
      }
    } else if (l1 && !l2) {
      if (curNode) {
        curNode.next = l1;
      }
      curNode = l1;
      l1 = l1.next || null;
    } else if (l2 && !l1) {
      if (curNode) {
        curNode.next = l2;
      }
      curNode = l2;
      l2 = l2.next || null;
    }

    if (!newList) {
      newList = curNode;
    }
  }

  return newList;
}
