// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const curStr = strs[i];
    if (curStr.substring(0, commonPrefix.length) === commonPrefix) {
      continue;
    }
    let a = 0;
    let s = "";
    while (commonPrefix[a] === curStr[a]) {
      s += commonPrefix[a];
      a++;
    }

    commonPrefix = s;
  }

  return commonPrefix;
}
