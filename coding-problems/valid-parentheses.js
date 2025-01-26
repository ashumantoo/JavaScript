/** LEETCODE URL LINK : https://leetcode.com/problems/valid-parentheses/description/
 *  YOUTUBE VIDEO LINK : https://www.youtube.com/watch?v=HhBo1fckgBM&list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma&index=2&ab_channel=AndyGala
 * 
 * PROBLEM STATEMENT : 
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *   1. Open brackets must be closed by the same type of brackets.
 *   2. Open brackets must be closed in the correct order.
 *   3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1: 
 *   Input: s = "()"
 *   Output: true
 * 
 * Example 2:
 *   Input: s = "()[]{}"
 *   Output: true
 * 
 * Example 3: 
 *   Input: s = "(]"
 *   Output: false
 * 
 * Example 4: 
 *   Input: s = "([])"
 *   Output: true
 */

function isValidParentheses(s) {
  const stack = [];
  const validParentheses = "() {} []";
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    //last two element from the stack array - open will be ( or { or [ and close will be ) or } or ];
    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];
    let potentialValidParenthesis = open + close; // (), {} or [];
    if (validParentheses.includes(potentialValidParenthesis)) {
      //if parenthesis is valid then remove from the stack array
      stack.pop();
      stack.pop();
    }
  }
  //after poping all the element if length of stack is 0 that means the "s" is a valid parenthesis
  return stack.length === 0;
}

console.log(isValidParentheses("([])"));