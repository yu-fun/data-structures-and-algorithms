// 58. 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 示例 1：

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为 5。
// 示例 2：

// 输入：s = "   fly me   to   the moon  "
// 输出：4
// 解释：最后一个单词是“moon”，长度为 4。
// 示例 3：

// 输入：s = "luffy is still joyboy"
// 输出：6
// 解释：最后一个单词是长度为 6 的“joyboy”。

function lengthOfLastWord(s: string): number {
  const len = s.length;
  let wordLen = 0;
  for (let i = len - 1; i >= 0; i--) {
    const char = s[i];

    if (wordLen && char == " ") {
      break;
    }

    if (char !== " ") {
      wordLen += 1;
    }
  }

  return wordLen;
}
