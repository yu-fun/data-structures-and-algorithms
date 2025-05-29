// 101. 对称二叉树
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// https://leetcode.cn/problems/symmetric-tree/?envType=study-plan-v2&envId=top-interview-150

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

function check(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!q || !p) {
    return false;
  } else if (p.val === q.val) {
    return check(p.left, q.right) && check(p.right, q.left);
  } else {
    return false;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root) {
    check(root.left, root.right);
  }

  return false;
}
// 先翻转下看是否相同，想想完全可以比一下 左边和右边 右边和左边 是否相同
// function isSymmetric(root: TreeNode | null): boolean {
//   function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (!p && !q) {
//       return true;
//     } else if (!q || !p) {
//       return false;
//     } else if (p.val === q.val) {
//       return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//     } else {
//       return false;
//     }
//   }
//   function invertTree(root: TreeNode | null): TreeNode | null {
//     if (root) {
//       const left = root.left;
//       root.left = invertTree(root.right);
//       root.right = invertTree(left);

//       return root;
//     }

//     return null;
//   }
//   if (root) {
//     if (!root.left && !root.right) {
//       return true;
//     } else if (!root.left || !root.right) {
//       return false;
//     } else if (root.left.val === root.right.val) {
//       const left = invertTree(root.left);
//       return isSameTree(left, root.right);
//     } else {
//       return false;
//     }
//   }

//   return false;
// }
