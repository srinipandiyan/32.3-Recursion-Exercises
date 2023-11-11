/** product: calculate the product of an array of numbers. */

function product(nums) {
  //Base case: if array contains a single element, return the value of the element.
  if (nums.length === 1) {
    return nums[0];
  }
  //multiply last element in array with the first element
  nums[0] = nums[0] * nums[nums.length - 1];
  //pop off last element
  nums.pop();
  //recursive call of function--now with popped array
  return product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
//Base case: if array contains a single element, return the value of the element.
  if (words.length === 1) return words[0].length;
  
  let finalIdx = (words.length - 1);
    //compare total length of first and last elements of array 
    if (words[0].length > words[finalIdx].length) {
      //remove shorter last element
      words.pop();
    } else if (words[0].length < words[finalIdx].length) {
      //reassign shorter first element to be last element and remove last element
      words[0] = words[finalIdx]
      words.pop();
    } else {
      //if words are of equal length, remove last element (for improved time complexity )
      words.pop();
    }
  //recursively call function with words array containing one less word
  return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
  //Base case: if string length is greater than idx, return ""
  if (str.length <= idx) {
    return "";
  }
  
  //concat the remaining characters after skipping one to current str
  return str[idx].concat(everyOther(str, idx + 2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //Base case: if str length is zero or one, return true
  if (str.length <= 1) return true;

  //define first and last characters of str
  const firstChar = str[0].toLowerCase();
  const lastChar = str[(str.length - 1)].toLowerCase();
  
    //if chars match, recursively call function with substring
    if (firstChar === lastChar) {
      //slice string to remove first and last char in recursive call
      return isPalindrome(str.slice(1,-1));
    }

  //if first and last char in str do not match, return false
  return false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  //Base case: if arr length equals idx and val does not equal last element, then return '-1'
  if (arr.length == (idx - 1) && arr[idx] !== val){
    return -1
  }

  //compare first element to val
    if (arr[idx] === val ){
      return idx
    }
  
  idx++
  //recursively call function with popped array
  return findIndex(arr, val, idx)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr='') {
  //Base case: if str.length equals 0, then return revStr
  if (str.length < 1 ){
    return revStr;
  }
  //concat final element of str to revStr
  revStr += str[str.length - 1];
  //remove final element of str using slice
  str = str.slice(0,-1);
  //recursively call function with sliced str and concatenated revStr
  return revString(str, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
    for (let key in obj) {
      if (typeof obj[key] === "string") stringArr.push(obj[key]);
      if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
    }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
