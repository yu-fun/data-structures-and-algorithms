function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const k = magazine[i];
    if (map.has(k)) {
      map.set(k, map.get(k) + 1);
    } else {
      map.set(k, 1);
    }
  }

  const map2 = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    const k = ransomNote[i];
    if (map2.has(k)) {
      map2.set(k, map2.get(k) + 1);
    } else {
      map2.set(k, 1);
    }
  }

  for (const [k, c] of map2) {
    if (!map.has(k) || !(map.get(k) >= c)) {
      return false;
    }
  }

  return true;
}
