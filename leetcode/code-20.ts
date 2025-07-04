// 20. 有效的括号
// 提示
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 示例 1：

// 输入：s = "()"

// 输出：true

// 示例 2：

// 输入：s = "()[]{}"

// 输出：true

// 示例 3：

// 输入：s = "(]"

// 输出：false

// 示例 4：

// 输入：s = "([])"

// 输出：true

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

function isValid(s: string): boolean {
  const stack: string[] = [];
  if (s.length % 2) {
    return false;
  }

  for (const char of s) {
    if (char == "(" || char == "[" || char == "{") {
      stack.push(char);
    } else {
      const last = stack.pop();

      if (!last) {
        return false;
      }

      if (
        (last == "(" && char !== ")") ||
        (last == "[" && char !== "]") ||
        (last == "{" && char !== "}")
      ) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}
