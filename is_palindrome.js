const Stack = require('./stack');

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = new Stack();
    let len = s.length;
    let mid = Math.floor(len / 2);
    for (let i = 0; i < mid; i++) {
        stack.push(s[i]);
    }

    if (len % 2 !== 0) {
        for (let i = mid + 1; i < len; i++) {
            let checkLetter = stack.pop();
            if (checkLetter !== s[i]) {
                return false;
            }
        }
    } else {
        for (let i = mid; i < len; i++) {
            let checkLetter = stack.pop();
            if (checkLetter !== s[i]) {
                return false;
            }
        }
    }
    

    return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));