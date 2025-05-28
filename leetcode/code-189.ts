// 189. 轮转数组
// 提示
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

// 示例 2:

// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释:
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

// 1
function rotate(nums: number[], k: number): void {
  const len = nums.length;
  const offset = k % len;
  if (!offset) return;

  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    const idx = (i + offset) % len;
    arr[idx] = nums[i];
  }

  for (let i = 0; i < len; i++) {
    nums[i] = arr[i];
  }
}

// 2
function rotate2(nums: number[], k: number): void {
  const len = nums.length;
  const offset = k % len;
  if (!offset) return;

  nums.unshift(...nums.splice(len - offset));
}

