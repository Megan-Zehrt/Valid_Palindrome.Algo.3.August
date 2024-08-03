// 125. Valid Palindrome



// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.







/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let string = ""
    const letterRegex = /^[a-zA-Z0-9]$/;

    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(letterRegex.test(char)){
            string += "" + char + ""
        }
    }

    let reversed = string.split('').reverse().join('')

    if(reversed.toLowerCase() === string.toLowerCase()){
        return true
    }

    return false
};