// 28. 找出字符串中第一个匹配项的下标
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

// 示例 1：

// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。
// 示例 2：

// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。

// 提示：

// 1 <= haystack.length, needle.length <= 104
// haystack 和 needle 仅由小写英文字符组成

function strStr(haystack: string, needle: string): number {
  const hLen = haystack.length;
  const nLen = needle.length;
  h: for (let i = 0; i < hLen; ++i) {
    if (haystack[i] == needle[0]) {
      let n = 1;
      while (n < nLen) {
        if (haystack[i + n] !== needle[n]) {
          continue h;
        }
        ++n;
      }

      return i;
    }
  }

  return -1;
}
