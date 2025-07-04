// 100. 相同的树
// https://leetcode.cn/problems/same-tree/?envType=study-plan-v2&envId=top-interview-150
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1：

// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true
// 示例 2：

// 输入：p = [1,2], q = [1,null,2]
// 输出：false
// 示例 3：

// 输入：p = [1,2,1], q = [1,1,2]
// 输出：false

// 提示：

// 两棵树上的节点数目都在范围 [0, 100] 内
// -104 <= Node.val <= 104
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   if (p && q) {
//     if (p.val === q.val) {
//       return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//     } else {
//       return false;
//     }
//   }
//   if (!p && !q) {
//     return true;
//   }

//   return false;
// }

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!q || !p) {
    return false;
  } else if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
}
