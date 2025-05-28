function isIsomorphic(s: string, t: string): boolean {
  const s2t = new Map();
  const t2s = new Map();

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    const x = s2t.get(a);
    const y = t2s.get(b);

    if ((x && x !== b) || (y && y !== a)) {
      return false;
    }

    s2t.set(a, b);
    t2s.set(b, a);
  }
  return true;
}
