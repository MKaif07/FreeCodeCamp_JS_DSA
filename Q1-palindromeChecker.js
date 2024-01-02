function palindrome(str) {
  let temp = str
    .toLowerCase()
    .split(/[^a-z0-9]/)
    .join("");
  let i = 0,
    j = temp.length - 1;
  while (i <= j) {
    if (temp[i] !== temp[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindrome("eye"));
palindrome("A man, a plan, a canal. Panama")
palindrome("race car")
