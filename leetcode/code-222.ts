// 222. 完全二叉树的节点个数
// https://leetcode.cn/problems/count-complete-tree-nodes/description/?envType=study-plan-v2&envId=top-interview-150
// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
// 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层（从第 0 层开始），则该层包含 1~ 2h 个节点。
// 示例 1：
// 输入：root = [1,2,3,4,5,6]
// 输出：6
// 示例 2：
// 输入：root = []
// 输出：0
// 示例 3：
// 输入：root = [1]
// 输出：1
// 提示：
// 树中节点的数目范围是[0, 5 * 104]
// 0 <= Node.val <= 5 * 104
// 题目数据保证输入的树是 完全二叉树
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

function countNodes(root: TreeNode | null): number {
  if (root) {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }

  return 0;
}
