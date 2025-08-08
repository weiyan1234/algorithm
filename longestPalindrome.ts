function longestPalindrome(s: string): string {
  const palindrome = (s: string, left: number, right: number) => {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      left--;
      right++;
    }

    console.log("s.substring(left + 1, right)", s.substring(left + 1, right));
    return s.substring(left + 1, right);
  };
  let result = "";
  for (let i = 0; i < s.length; i++) {
    console.log("i", i);
    //奇数个回形文
    let s1 = palindrome(s, i, i);
    console.log("s1", s1);
    //偶数个回形文
    let s2 = palindrome(s, i, i + 1);
    console.log("s2", s2);
    //取result,s1, s2之间的最小值
    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }

  return result;
}
longestPalindrome("babad");
