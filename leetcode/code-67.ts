// 67. 二进制求和
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 示例 1：
// 输入:a = "11", b = "1"
// 输出："100"
// 示例 2：
// 输入：a = "1010", b = "1011"
// 输出："10101"
// 提示：
// 1 <= a.length, b.length <= 104
// a 和 b 仅由字符 '0' 或 '1' 组成
// 字符串如果不是 "0" ，就不含前导零

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let s = "";
  let c = 0;
  while (i >= 0 || j >= 0) {
    const r = Number(a[i] || 0) + Number(b[j] || 0) + c;
    if (r === 3) {
      s = "1" + s;
      c = 1;
    } else if (r === 2) {
      s = "0" + s;
      c = 1;
    } else {
      s = r + s;
      c = 0;
    }
    --i;
    --j;
  }

  if (c) {
    s = c + s;
  }

  return s;
}
