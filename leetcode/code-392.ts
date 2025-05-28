function isSubsequence(s: string, t: string): boolean {
  let a = 0;
  let b = 0;
  while (a < s.length && b < t.length) {
    if (a >= s.length) {
      break;
    }
    if (s[a] === t[b]) {
      a++;
    }
    b++;
  }

  return a >= s.length;
}
