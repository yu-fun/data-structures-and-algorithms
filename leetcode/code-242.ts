// 242. 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

// 提示:

// 1 <= s.length, t.length <= 5 * 104
// s 和 t 仅包含小写字母
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();
  for (let i = 0; i < s.length; ++i) {
    const a = s[i];
    const b = t[i];

    sMap.set(a, (sMap.get(a) || 0) + 1);
    tMap.set(b, (tMap.get(b) || 0) + 1);
  }

  for (const [k, v] of sMap) {
    if (tMap.get(k) != v) {
      return false;
    }
  }

  for (const [k, v] of tMap) {
    if (sMap.get(k) != v) {
      return false;
    }
  }

  return true;
}

