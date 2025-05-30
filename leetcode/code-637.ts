// 637. 二叉树的层平均值
// https://leetcode.cn/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
// 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。
// 示例 1：
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[3.00000,14.50000,11.00000]
// 解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
// 因此返回 [3, 14.5, 11] 。
// 示例 2:
// 输入：root = [3,9,20,15,7]
// 输出：[3.00000,14.50000,11.00000]
// 提示：
// 树中节点数量在 [1, 104] 范围内
// -231 <= Node.val <= 231 - 1

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
// 这种遍历原来叫广度优先搜索，学到了
function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const avgs: number[] = [];
  const nodes = [root];

  while (nodes.length) {
    const len = nodes.length;
    let sum = 0;
    let i = 0;

    while (i < len) {
      const node = nodes.shift()!;
      sum += node.val;

      if (node.left) {
        nodes.push(node.left);
      }

      if (node.right) {
        nodes.push(node.right);
      }
      ++i;
    }

    avgs.push(sum / len);
  }

  return avgs;
}
// 感觉可以再优化优化
// function averageOfLevels(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   const avgs: number[] = [];
//   const nodes = [root];

//   while (nodes.length) {
//     const len = nodes.length;
//     const avg =
//       nodes.reduce((sum, n) => {
//         return sum + n?.val || 0;
//       }, 0) / len;

//     avgs.push(avg);

//     nodes.forEach((node) => {
//       if (node.left) {
//         nodes.push(node.left);
//       }

//       if (node.right) {
//         nodes.push(node.right);
//       }
//     });

//     nodes.splice(0, len);
//   }

//   return avgs;
// }
