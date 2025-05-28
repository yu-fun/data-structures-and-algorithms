function wordPattern(pattern: string, s: string): boolean {
  const p2s = new Map();
  const s2p = new Map();

  const words = s.split(/\s+/);

  if (words.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const a = pattern[i];
    const b = words[i];

    const x = p2s.get(a);
    const y = s2p.get(b);

    if ((x && x !== b) || (y && y !== a)) {
      return false;
    }

    p2s.set(a, b);
    s2p.set(b, a);
  }

  return true;
}
