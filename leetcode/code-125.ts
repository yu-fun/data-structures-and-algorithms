function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase();
  const regex = /^[a-z0-9]$/;
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      str += s[i];
    }
  }
  let a = 0;
  let b = str.length - 1;
  while (a < b) {
    if (str[a] != str[b]) {
      return false;
    }
    ++a;
    --b;
  }

  return true;
}
